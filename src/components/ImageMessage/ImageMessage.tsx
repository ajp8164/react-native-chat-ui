import * as React from 'react';

import { Image, ImageBackground, Text, View } from 'react-native';
import { MessageType, Size } from '../../types';
import {
  ThemeContext,
  UrlResolverContext,
  UserContext,
  formatBytes,
} from '../../utils';

import styles from './styles';

export interface ImageMessageProps {
  isFocused: boolean;
  message: MessageType.DerivedImage;
  /** Maximum message width */
  messageWidth: number;
}

/** Image message component. Supports different
 * aspect ratios, renders blurred image as a background which is visible
 * if the image is narrow, renders image in form of a file if aspect
 * ratio is very small or very big. */
export const ImageMessage = ({
  isFocused: _isFocused,
  message,
  messageWidth,
}: ImageMessageProps) => {
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(UserContext);
  const defaultHeight = message.height ?? 0;
  const defaultWidth = message.width ?? 0;
  const [size, setSize] = React.useState<Size>({
    height: defaultHeight,
    width: defaultWidth,
  });
  const aspectRatio = size.width / (size.height || 1);
  const isMinimized = aspectRatio < 0.1 || aspectRatio > 10;
  const {
    horizontalImage,
    minimizedImage,
    minimizedImageContainer,
    nameText,
    sizeText,
    textContainer,
    verticalImage,
  } = styles({
    aspectRatio,
    message,
    messageWidth,
    theme,
    user,
  });

  const [resolvedImageUri, setResolvedImageUri] = React.useState<string>();
  const resolveUrl = React.useContext(UrlResolverContext);

  React.useEffect(() => {
    resolveUrl(message.uri, setResolvedImageUri);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (defaultHeight <= 0 || defaultWidth <= 0)
      Image.getSize(
        message.uri,
        (width, height) => setSize({ height, width }),
        () => setSize({ height: 0, width: 0 }),
      );
  }, [defaultHeight, defaultWidth, message.uri]);

  const renderImage = () => {
    if (!resolvedImageUri) return null;
    return (
      <Image
        accessibilityRole="image"
        resizeMode={isMinimized ? 'cover' : 'contain'}
        source={{ uri: resolvedImageUri }}
        style={
          isMinimized
            ? minimizedImage
            : aspectRatio < 1
            ? verticalImage
            : horizontalImage
        }
      />
    );
  };

  return isMinimized ? (
    <View style={minimizedImageContainer}>
      {renderImage()}
      <View style={textContainer}>
        <Text style={nameText}>{message.name}</Text>
        <Text style={sizeText}>{formatBytes(message.size)}</Text>
      </View>
    </View>
  ) : (
    <ImageBackground blurRadius={26} source={{ uri: message.uri }} style={{}}>
      {renderImage()}
    </ImageBackground>
  );
};
