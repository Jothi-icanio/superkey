import React from 'react'

const HelpIcon = ({ fill = '#7C7C7C' }) => {
    return (
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M16.2075 14.3483C16.2075 17.0131 14.2599 19.304 11.6464 19.762C11.3523 19.3891 10.899 19.1463 10.3869 19.1463C9.4974 19.1463 8.77983 19.8639 8.77983 20.7534C8.77983 21.6429 9.4974 22.3605 10.3869 22.3605C10.9668 22.3605 11.4705 22.0519 11.7514 21.5883C15.3248 21.066 18.0159 17.9688 18.0222 14.3611C19.0026 14.2149 19.75 13.3845 19.75 12.3569V9.61183C19.75 8.5763 18.9835 7.73393 17.9886 7.60029C17.6761 3.8524 14.5347 0.9 10.7098 0.9H9.84866C6.03231 0.9 2.89846 3.8422 2.57092 7.57485C1.65887 7.6032 0.9 8.51396 0.9 9.61183V12.3569C0.9 13.4699 1.62754 14.3945 2.61472 14.3945H4.27788H4.37788V14.2945V7.7326C4.63383 4.96993 7.03428 2.71472 9.84866 2.71472H10.7098C13.6903 2.71472 16.2075 5.23197 16.2075 8.21241V14.3483Z" fill={fill} stroke={fill} stroke-width="0.2" />
        </svg>

    )
}

export default HelpIcon