import { Theme } from './types';

/** Error */
const ERROR = '#ff6767';

/** N0 */
const NEUTRAL_0 = '#1d1c21';

/** N2 */
const NEUTRAL_2 = '#9e9cab';

/** N7 */
const NEUTRAL_7 = '#ffffff';

/** N7 with opacity */
const NEUTRAL_7_WITH_OPACITY = '#ffffff80';

/** Primary */
const PRIMARY = '#6f61e8';

/** Secondary */
const SECONDARY = '#f5f5f7';

/** Secondary dark */
const SECONDARY_DARK = '#2b2250';

/** Default chat theme which implements {@link Theme} */
export const defaultTheme: Theme = {
  avatar: {
    colors: [
      '#ff6767',
      '#66e0da',
      '#f5a2d9',
      '#f0c722',
      '#6a85e5',
      '#fd9a6f',
      '#92db6e',
      '#73b8e5',
      '#fd7590',
      '#c78ae5',
    ],
    imageBackgroundColor: 'transparent',
    text: {
      color: NEUTRAL_7,
      fontSize: 12,
      fontWeight: '800',
      lineHeight: 16,
    },
  },
  bubble: {
    containerLeft: {
      marginLeft: 12,
    },
    containerRight: {
      marginRight: 12,
    },
    contentLeftContainer: {
      borderRadius: 20,
      backgroundColor: SECONDARY,
    },
    contentRightContainer: {
      borderRadius: 20,
      backgroundColor: PRIMARY,
    },
    fileLeftContainer: {
      padding: 16,
      paddingRight: 20,
    },
    fileRightContainer: {
      padding: 16,
      paddingRight: 20,
    },
    bodyTextLeft: {
      color: NEUTRAL_0,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    },
    bodyTextRight: {
      color: NEUTRAL_7,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    },
    captionTextLeft: {
      color: PRIMARY,
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 16,
      marginTop: 4,
    },
    captionTextRight: {
      color: NEUTRAL_7_WITH_OPACITY,
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 16,
      marginTop: 4,
    },
    documentIconLeftColor: PRIMARY,
    documentIconRightColor: NEUTRAL_7,
    headerText: {
      fontSize: 12,
      fontWeight: '800',
      lineHeight: 16,
      marginBottom: 6,
    },
    linkDescriptionTextLeft: {
      color: NEUTRAL_0,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 4,
    },
    linkDescriptionTextRight: {
      color: NEUTRAL_7,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 4,
    },
    linkTitleTextLeft: {
      color: NEUTRAL_0,
      fontSize: 16,
      fontWeight: '800',
      lineHeight: 22,
    },
    linkTitleTextRight: {
      color: NEUTRAL_7,
      fontSize: 16,
      fontWeight: '800',
      lineHeight: 22,
    },
    messageTextLeft: {
      color: NEUTRAL_0,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    },
    messageTextRight: {
      color: NEUTRAL_7,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    },
    textLeftContainer: {
      marginHorizontal: 20,
      marginVertical: 16,
    },
    textRightContainer: {
      marginHorizontal: 20,
      marginVertical: 16,
    },
    username: {},
  },
  colors: {
    error: ERROR,
    light: NEUTRAL_2,
    primary: PRIMARY,
    secondary: SECONDARY,
  },
  composer: {
    activityIndicator: {
      color: PRIMARY,
      size: 16,
    },
    attachmentButtonIcon: {
      tintColor: PRIMARY,
    },
    attachmentIcon: {
      tintColor: PRIMARY,
    },
    container: {
      backgroundColor: SECONDARY_DARK,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    contentOffsetKeyboardClosed: 0,
    contentOffsetKeyboardOpened: 0,
    fileAttachmentContainer: {
      backgroundColor: NEUTRAL_7,
      borderColor: NEUTRAL_2,
    },
    fileAttachmentIconContainer: {
      backgroundColor: SECONDARY,
    },
    fileAttachmentText: {},
    inputAttachmentDivider: {},
    inputContainer: {},
    inputStyle: {
      color: NEUTRAL_7,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      borderRadius: 20,
      backgroundColor: SECONDARY_DARK,
    },
    placeholderTextColor: NEUTRAL_2,
    removeAttachmentButton: {
      backgroundColor: NEUTRAL_2,
      borderColor: NEUTRAL_7,
      tintColor: NEUTRAL_7,
    },
    sendIcon: {
      tintColor: PRIMARY,
    },
    tabBarHeight: 0,
    videoAttachmentDurationText: {
      color: NEUTRAL_7,
      fontSize: 12,
      fontWeight: '500',
    },
  },
  date: {
    text: {
      color: NEUTRAL_2,
      fontSize: 12,
      fontWeight: '800',
      lineHeight: 16,
    },
  },
  list: {
    activityIndicator: {
      color: PRIMARY,
      size: 24,
    },
    container: {
      backgroundColor: NEUTRAL_7,
    },
    contentContainer: {
      backgroundColor: NEUTRAL_7,
    },
    emptyChatPlaceholderText: {
      color: NEUTRAL_2,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
      textAlign: 'center',
    },
  },
  statusIcon: {
    activityIndicator: {
      color: PRIMARY,
      size: 10,
    },
    image: {
      tintColor: PRIMARY,
    },
    imageError: {
      tintColor: ERROR,
    },
  },
  typingIndicator: {
    dotColor: NEUTRAL_2,
  },
};
