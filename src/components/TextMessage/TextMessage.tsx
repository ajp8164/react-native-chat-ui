import * as React from 'react';

import { Dimensions, Linking, Text, View } from 'react-native';
import {
  LinkPreview,
  PreviewData,
  REGEX_LINK,
} from '@flyerhq/react-native-link-preview';
import { MessageType, UsernameLocation } from '../../types';
import {
  ThemeContext,
  UserContext,
  excludeDerivedMessageProps,
  getUserName,
  isEmojiStr,
} from '../../utils';

import ParsedText from 'react-native-parsed-text';
import styles from './styles';

export interface TextMessageTopLevelProps {
  /** @see {@link LinkPreviewProps.onPreviewDataFetched} */
  onPreviewDataFetched?: ({
    message,
    previewData,
  }: {
    message: MessageType.Text;
    previewData: PreviewData;
  }) => void;
  /** Enables link (URL) preview */
  usePreviewData?: boolean;
}

export interface TextMessageProps extends TextMessageTopLevelProps {
  enableAnimation?: boolean;
  isFocused: boolean;
  message: MessageType.DerivedText;
  messageWidth: number;
  showName: UsernameLocation;
}

export const TextMessage = ({
  enableAnimation,
  isFocused: _isFocused,
  message,
  messageWidth,
  onPreviewDataFetched,
  showName,
  usePreviewData,
}: TextMessageProps) => {
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(UserContext);
  const previewData = React.useRef(
    message.previewData && Object.keys(message.previewData).length > 0
      ? message.previewData
      : undefined,
  );
  const isEmoji = isEmojiStr(message.text);
  const {
    descriptionText,
    emojiText,
    headerText,
    titleText,
    text,
    textContainer,
    username,
  } = styles({
    message,
    showName,
    theme,
    user,
  });

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePreviewDataFetched = (data: PreviewData) => {
    previewData.current = data;
    onPreviewDataFetched?.({
      // It's okay to cast here since we know it is a text message
      // type-coverage:ignore-next-line
      message: excludeDerivedMessageProps(message) as MessageType.Text,
      previewData: data,
    });
  };

  const handleUrlPress = (url: string) => {
    const uri = url.toLowerCase().startsWith('http') ? url : `https://${url}`;

    Linking.openURL(uri);
  };

  const renderPreviewDescription = (description: string) => {
    return (
      <Text numberOfLines={3} style={descriptionText}>
        {description}
      </Text>
    );
  };

  const renderPreviewHeader = (header: string) => {
    return (
      <Text numberOfLines={1} style={headerText}>
        {header}
      </Text>
    );
  };

  const renderUsername = (name: string) => {
    return (
      <Text numberOfLines={1} style={username}>
        {name}
      </Text>
    );
  };

  const renderPreviewText = (previewText: string) => {
    return (
      <ParsedText
        accessibilityRole="link"
        parse={[
          {
            onPress: handleEmailPress,
            style: [text, { textDecorationLine: 'underline' }],
            type: 'email',
          },
          {
            onPress: handleUrlPress,
            pattern: REGEX_LINK,
            style: [text, { textDecorationLine: 'underline' }],
          },
        ]}
        style={text}>
        {previewText}
      </ParsedText>
    );
  };

  const renderPreviewTitle = (title: string) => {
    return (
      <Text numberOfLines={2} style={titleText}>
        {title}
      </Text>
    );
  };

  return usePreviewData &&
    !!onPreviewDataFetched &&
    REGEX_LINK.test(message.text.toLowerCase()) ? (
    <LinkPreview
      containerStyle={{
        width: previewData.current?.image ? messageWidth : undefined,
        minWidth: Math.min(messageWidth, Dimensions.get('window').width * 0.45),
      }}
      enableAnimation={enableAnimation}
      header={showName === 'inside' ? getUserName(message.author) : undefined}
      onPreviewDataFetched={handlePreviewDataFetched}
      previewData={previewData.current}
      renderDescription={renderPreviewDescription}
      renderHeader={renderPreviewHeader}
      renderText={renderPreviewText}
      renderTitle={renderPreviewTitle}
      text={message.text}
      textContainerStyle={textContainer}
      touchableWithoutFeedbackProps={{
        accessibilityRole: undefined,
        accessible: false,
        disabled: true,
      }}
    />
  ) : (
    <View style={textContainer}>
      {
        /* istanbul ignore next */
        showName === 'inside'
          ? renderUsername(getUserName(message.author))
          : null
      }
      <Text style={[text, isEmoji ? emojiText : {}]}>{message.text}</Text>
    </View>
  );
};
