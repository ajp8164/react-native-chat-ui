import { MessageType, Theme, UsernameLocation } from '../../types';

import { StyleSheet } from 'react-native';

const styles = ({
  currentUserIsAuthor,
  message,
  messageWidth,
  roundBorder,
  showName,
  showStatus,
  theme,
}: {
  currentUserIsAuthor: boolean;
  message: MessageType.DerivedAny;
  messageWidth: number;
  roundBorder: boolean;
  showName: UsernameLocation;
  showStatus: boolean;
  theme: Theme;
}) => {
  const restContainer = currentUserIsAuthor
    ? theme.bubble?.containerRight
    : theme.bubble?.containerLeft;
  const restContentContainer = currentUserIsAuthor
    ? theme.bubble?.contentRightContainer
    : theme.bubble?.contentLeftContainer;

  return StyleSheet.create({
    container: {
      ...restContainer, // Preserve built in layout
      alignItems: 'flex-end',
      alignSelf: currentUserIsAuthor ? 'flex-end' : 'flex-start',
      justifyContent: !currentUserIsAuthor ? 'flex-end' : 'flex-start',
      flex: 1,
      flexDirection: 'row',
      marginBottom:
        message.type === 'dateHeader' || showStatus ? 0 : 4 + message.offset,
      marginLeft: currentUserIsAuthor
        ? 0
        : theme.bubble?.containerLeft?.marginLeft || 0,
      marginRight: currentUserIsAuthor
        ? theme.bubble?.containerRight?.marginRight || 0
        : 0,
    },
    contentContainer: {
      overflow: 'hidden',
      borderBottomLeftRadius:
        currentUserIsAuthor || roundBorder
          ? theme.bubble?.contentRightContainer?.borderBottomLeftRadius
          : 0,
      borderBottomRightRadius: currentUserIsAuthor
        ? roundBorder
          ? theme.bubble?.contentRightContainer?.borderBottomRightRadius
          : 0
        : theme.bubble?.contentLeftContainer?.borderBottomLeftRadius,
      borderColor: 'transparent',
      borderRadius: currentUserIsAuthor
        ? theme.bubble?.contentRightContainer?.borderRadius
        : theme.bubble?.contentLeftContainer?.borderRadius,
      ...restContentContainer,
    },
    dateHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      marginTop: 12,
    },
    emojiContentContainer: {
      backgroundColor: 'transparent',
    },
    pressable: {
      maxWidth: messageWidth,
    },
    username: {
      marginLeft: showName === 'outside' ? 50 : 0,
      paddingBottom: 5,
      ...theme.bubble?.username,
    },
  });
};

export default styles;
