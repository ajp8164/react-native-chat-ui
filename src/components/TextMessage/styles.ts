import { MessageType, Theme, User, UsernameLocation } from '../../types';

import { StyleSheet } from 'react-native';
import { getUserAvatarNameColor } from '../../utils';

const styles = ({
  message,
  theme,
  showName,
  user,
}: {
  message: MessageType.Text;
  theme: Theme;
  showName: UsernameLocation;
  user?: User;
}) =>
  StyleSheet.create({
    descriptionText: {
      ...(user?.id === message.author.id
        ? theme.bubble?.linkDescriptionTextRight
        : theme.bubble?.linkDescriptionTextLeft),
    },
    emojiText: {
      fontSize: 50,
      lineHeight: 58,
    },
    headerText: {
      color: getUserAvatarNameColor(message.author, theme.avatar?.colors),
      ...theme.bubble?.headerText,
    },
    titleText: {
      ...(user?.id === message.author.id
        ? theme.bubble?.linkTitleTextRight
        : theme.bubble?.linkTitleTextLeft),
    },
    text: {
      ...(user?.id === message.author.id
        ? theme.bubble?.messageTextRight
        : theme.bubble?.messageTextLeft),
    },
    textContainer: {
      ...(user?.id === message.author.id
        ? theme.bubble?.textRightContainer
        : theme.bubble?.textLeftContainer),
    },
    username: {
      marginLeft: showName === 'outside' ? 8 : 0,
      paddingBottom: 5,
      color: getUserAvatarNameColor(message.author, theme.avatar?.colors),
      ...theme.bubble?.username,
    },
  });

export default styles;
