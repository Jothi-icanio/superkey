import * as React from "react";
const PropertyIcon = ({ fill = '#7C7C7C' }) => (

    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 7">
            <path id="Vector" d="M14.3402 14.3137L14.3402 14.3139C14.3401 14.4295 14.3742 14.5425 14.4383 14.6386C14.5024 14.7348 14.5936 14.8097 14.7003 14.854C14.807 14.8983 14.9245 14.9099 15.0378 14.8874C15.1512 14.8649 15.2553 14.8093 15.337 14.7276C15.4187 14.6459 15.4743 14.5418 15.4968 14.4285C15.5193 14.3151 15.5077 14.1976 15.4634 14.0909C15.4191 13.9842 15.3441 13.893 15.248 13.8289C15.1519 13.7648 15.0389 13.7307 14.9233 13.7309L14.9231 13.7309C14.7686 13.7313 14.6206 13.7928 14.5114 13.902C14.4022 14.0113 14.3407 14.1593 14.3402 14.3137Z" stroke={fill} stroke-width="0.3" />
            <path id="Vector_2" d="M17.1511 12.5621V12.6299L17.202 12.6747L18.2683 13.6125L18.5174 13.8315V13.4999V12.0606C18.5201 11.9699 18.5047 11.8795 18.4721 11.7948C18.4391 11.7092 18.3893 11.6311 18.3256 11.5652C18.2618 11.4993 18.1855 11.4469 18.1011 11.4111C18.0167 11.3753 17.9259 11.3568 17.8342 11.3568C17.7425 11.3568 17.6518 11.3753 17.5674 11.4111C17.483 11.4469 17.4066 11.4993 17.3429 11.5652C17.2792 11.6311 17.2293 11.7092 17.1964 11.7948C17.1638 11.8795 17.1484 11.9699 17.1511 12.0606V12.5621Z" stroke={fill} stroke-width="0.3" />
            <path id="Vector_3" d="M15.0497 17.2279V17.2279H15.0488L14.8769 17.2279L14.8767 17.2279C14.6594 17.2281 14.451 17.3145 14.2973 17.4682C14.1437 17.6219 14.0572 17.8303 14.057 18.0476V18.0478V19.1014V19.2514H14.207H15.7157H15.8657V19.1014L15.8657 18.0466L15.8657 18.0461C15.8651 17.8297 15.779 17.6223 15.6261 17.469C15.4733 17.3158 15.2661 17.2291 15.0497 17.2279Z" stroke={fill} stroke-width="0.3" />
            <path id="Vector_4" d="M14.4159 11.9216L14.4161 11.9214C14.5564 11.7986 14.7364 11.7309 14.9229 11.7309C15.1093 11.7309 15.2894 11.7986 15.4296 11.9214L15.4298 11.9216L18.4676 14.5925L18.5186 14.6373V14.7051L18.5186 18.707L18.5186 18.7072M14.4159 11.9216L18.2541 18.9845C18.2905 18.9481 18.3193 18.9049 18.3389 18.8573C18.3586 18.8097 18.3687 18.7587 18.3686 18.7072H18.5186M14.4159 11.9216L11.3775 14.5937L11.3266 14.6385V14.7063L11.3266 18.7096L11.3266 18.7098C11.3268 18.8535 11.384 18.9913 11.4856 19.0929C11.5872 19.1945 11.7249 19.2516 11.8686 19.2519H11.8688H13.3008H13.4508V19.1019L13.4508 18.046M14.4159 11.9216L13.4508 18.046M18.5186 18.7072C18.5187 18.7783 18.5047 18.8488 18.4776 18.9145C18.4504 18.9803 18.4105 19.0401 18.3602 19.0905C18.3099 19.1409 18.2502 19.1809 18.1844 19.2081C18.1186 19.2354 18.0481 19.2494 17.9769 19.2494H16.6228H16.4728V19.0994V18.046C16.4724 17.6681 16.3221 17.3059 16.0549 17.0387C15.7877 16.7715 15.4255 16.6212 15.0476 16.6208H14.876M18.5186 18.7072L14.876 16.6208M15.3308 12.0342L18.3686 14.7051L15.3308 12.0342ZM15.3308 12.0342C15.2179 11.9354 15.0729 11.8809 14.9229 11.8809C14.7728 11.8809 14.6278 11.9354 14.5149 12.0342H15.3308ZM13.4508 18.046C13.4508 18.046 13.4508 18.0459 13.4508 18.0459C13.4513 17.6681 13.6015 17.3059 13.8687 17.0387C14.1359 16.7715 14.4981 16.6212 14.876 16.6208M13.4508 18.046L14.876 16.6208M16.6228 18.0458V18.9494V19.0994V18.0458ZM16.6228 18.0458C16.6223 17.6283 16.4562 17.2279 16.161 16.9327C15.8657 16.6374 15.4654 16.4713 15.0478 16.4708L16.6228 18.0458ZM16.1119 14.3143C16.1122 14.5495 16.0428 14.7796 15.9123 14.9753C15.7819 15.1711 15.5963 15.3237 15.379 15.414C15.1618 15.5042 14.9226 15.528 14.6919 15.4823C14.4611 15.4366 14.2491 15.3235 14.0826 15.1573C13.9162 14.991 13.8028 14.7792 13.7568 14.5485C13.7108 14.3178 13.7342 14.0786 13.8242 13.8612C13.9141 13.6439 14.0665 13.4581 14.2621 13.3273C14.4576 13.1966 14.6875 13.1269 14.9227 13.1268C15.2378 13.1271 15.5398 13.2523 15.7627 13.4749C15.9856 13.6975 16.1112 13.9993 16.1119 14.3143Z" stroke={fill} stroke-width="0.3" />
            <path id="Vector_5" d="M16.9431 10.8694C16.6701 11.0745 16.4761 11.3668 16.3933 11.6964L15.9614 11.3171L15.9614 11.3171C15.6739 11.0656 15.305 10.927 14.9231 10.927C14.5412 10.927 14.1722 11.0656 13.8848 11.3171L13.8847 11.3171L9.9623 14.7671L9.96192 14.7674C9.86541 14.8541 9.80628 14.9748 9.79699 15.1042C9.7877 15.2335 9.82897 15.3615 9.9121 15.461C9.99524 15.5606 10.1138 15.624 10.2427 15.6379C10.3397 15.6484 10.437 15.6302 10.5228 15.5867V18.7101L10.5228 18.7102C10.5232 19.0674 10.6652 19.41 10.9178 19.6626C11.1704 19.9152 11.513 20.0572 11.8702 20.0576H11.8702H17.9772H17.9772C18.3344 20.0572 18.6769 19.9152 18.9294 19.6625C19.1819 19.4099 19.3238 19.0674 19.324 18.7102V18.7101V15.5859C19.4097 15.6291 19.5066 15.6471 19.6033 15.6366C19.7319 15.6227 19.8501 15.5596 19.9332 15.4604C20.0163 15.3613 20.0578 15.2339 20.0491 15.1049C20.0403 14.9759 19.982 14.8552 19.8863 14.7682L19.8857 14.7677L19.324 14.2733V12.0583C19.3239 11.688 19.1858 11.3311 18.9365 11.0572C18.6872 10.7834 18.3448 10.6124 17.9761 10.5777C17.6075 10.5429 17.2391 10.6469 16.9431 10.8694ZM18.3188 18.7089V18.709C18.3189 18.7539 18.3101 18.7984 18.2929 18.8399C18.2758 18.8814 18.2507 18.9192 18.2189 18.9509C18.1872 18.9827 18.1495 19.0079 18.108 19.0251C18.0665 19.0423 18.0221 19.0512 17.9772 19.0512H16.673V18.0464V18.0463C16.6725 17.6155 16.5012 17.2025 16.1965 16.8978C15.8919 16.5932 15.4789 16.4218 15.0481 16.4213H15.048H14.876H14.876C14.4452 16.4218 14.0321 16.5932 13.7275 16.8978C13.4229 17.2025 13.2515 17.6155 13.251 18.0463V18.0464V19.05H11.8691C11.7784 19.0498 11.6914 19.0137 11.6272 18.9496C11.563 18.8854 11.5269 18.7984 11.5268 18.7077V14.7295L14.5481 12.0724C14.6519 11.9815 14.7851 11.9314 14.9231 11.9314C15.061 11.9314 15.1943 11.9815 15.298 12.0723C15.2981 12.0724 15.2981 12.0724 15.2981 12.0724L18.3188 14.7283V18.7089ZM18.3188 12.0566L18.3188 12.0566V12.0583V13.3894L17.3525 12.5396V12.0583H17.3525L17.3525 12.0566C17.3503 11.9918 17.3612 11.9272 17.3845 11.8667C17.4078 11.8062 17.443 11.7509 17.4881 11.7043C17.5332 11.6577 17.5872 11.6206 17.6469 11.5953C17.7066 11.57 17.7708 11.5569 17.8357 11.5569C17.9005 11.5569 17.9647 11.57 18.0244 11.5953C18.0841 11.6206 18.1381 11.6577 18.1832 11.7043C18.2283 11.7509 18.2635 11.8062 18.2868 11.8667C18.3101 11.9272 18.321 11.9918 18.3188 12.0566ZM15.6709 18.0464L15.668 19.0512H14.2592V18.0464C14.2594 17.882 14.3247 17.7245 14.4409 17.6082C14.5572 17.492 14.7147 17.4267 14.8791 17.4265H15.051C15.2153 17.4267 15.3729 17.492 15.4891 17.6082C15.6054 17.7245 15.6707 17.882 15.6709 18.0464Z" fill={fill} stroke={fill} stroke-width="0.1" />
            <path id="Vector_6" d="M13.434 14.3144L13.434 14.3146C13.4336 14.6092 13.5206 14.8973 13.684 15.1425C13.8474 15.3876 14.0799 15.5788 14.352 15.6918C14.6241 15.8048 14.9236 15.8345 15.2126 15.7772C15.5016 15.72 15.7671 15.5782 15.9755 15.37C16.1839 15.1618 16.3259 14.8964 16.3834 14.6074C16.441 14.3185 16.4115 14.019 16.2988 13.7468C16.186 13.4746 15.995 13.2419 15.75 13.0783C15.505 12.9147 15.217 12.8274 14.9224 12.8275L14.9222 12.8275C14.5279 12.8281 14.1499 12.9849 13.8709 13.2636C13.592 13.5422 13.4349 13.9201 13.434 14.3144ZM15.2063 14.315C15.2064 14.3712 15.1898 14.4261 15.1587 14.4728C15.1275 14.5196 15.0832 14.556 15.0313 14.5775C14.9795 14.5991 14.9224 14.6048 14.8673 14.5939C14.8122 14.583 14.7616 14.5559 14.7218 14.5163C14.6821 14.4766 14.655 14.426 14.644 14.3709C14.6331 14.3158 14.6387 14.2587 14.6601 14.2068C14.6816 14.1549 14.718 14.1106 14.7647 14.0794C14.8114 14.0482 14.8663 14.0315 14.9224 14.0315L14.9224 13.8815L14.9222 14.0315C14.9975 14.0316 15.0696 14.0615 15.1229 14.1147C15.1761 14.1679 15.2061 14.24 15.2063 14.3152L15.3563 14.3148L15.2063 14.315Z" fill={fill} stroke={fill} stroke-width="0.3" />
            <path id="Vector_7" d="M3.36251 20.1521H3.36232C2.69616 20.1512 2.05754 19.8862 1.58655 19.4151C1.11557 18.9439 0.850679 18.3053 0.85 17.6391L0.85 17.6389L0.85 3.36251V3.36232C0.850849 2.69627 1.11581 2.05775 1.58678 1.58678C2.05775 1.11581 2.69627 0.850849 3.36232 0.85L3.36251 0.85L16.4399 0.85H16.4401C17.1061 0.850849 17.7447 1.11581 18.2156 1.58678C18.6866 2.05775 18.9515 2.69627 18.9524 3.36232V3.36251V9.06452C18.9524 9.22433 18.8889 9.3776 18.7759 9.49061C18.6629 9.60362 18.5096 9.6671 18.3498 9.6671C18.19 9.6671 18.0367 9.60362 17.9237 9.49061C17.8107 9.3776 17.7472 9.22433 17.7472 9.06452V3.3627C17.7468 3.01605 17.6089 2.68373 17.3638 2.43861C17.1187 2.19352 16.7864 2.05563 16.4398 2.05518C16.4398 2.05518 16.4397 2.05518 16.4397 2.05518H3.3627C3.36266 2.05518 3.36263 2.05518 3.3626 2.05518C3.01599 2.05563 2.68371 2.19352 2.43861 2.43861C2.19352 2.68371 2.05563 3.01599 2.05518 3.3626C2.05518 3.36263 2.05518 3.36266 2.05518 3.3627V17.6388L2.05518 17.6389M3.36251 20.1521V19.0969C2.97604 19.0964 2.60555 18.9426 2.33234 18.6693C2.05912 18.396 1.9055 18.0254 1.90518 17.6389H2.05518M3.36251 20.1521H9.1152C9.27502 20.1521 9.42829 20.0886 9.5413 19.9756C9.65431 19.8626 9.71779 19.7093 9.71779 19.5495C9.71779 19.3897 9.65431 19.2364 9.5413 19.1234C9.42829 19.0104 9.27502 18.9469 9.1152 18.9469H3.36269M3.36251 20.1521L3.36269 18.9469M2.05518 17.6389C2.0555 17.9856 2.19332 18.318 2.43842 18.5633C2.68355 18.8085 3.01596 18.9465 3.36269 18.9469M2.05518 17.6389L3.36269 18.9469" fill={fill} stroke={fill} stroke-width="0.3" />
            <path id="Vector_8" d="M14.6714 5.11731L14.6714 5.11731C14.5584 5.00431 14.4052 4.94082 14.2454 4.94082H5.26118C5.10137 4.94082 4.9481 5.00431 4.83509 5.11731C4.72208 5.23032 4.65859 5.38359 4.65859 5.54341C4.65859 5.70322 4.72208 5.8565 4.83509 5.9695C4.94809 6.08251 5.10137 6.146 5.26118 6.146H14.2454C14.4052 6.146 14.5584 6.08251 14.6714 5.9695L14.5654 5.86344L14.6714 5.9695C14.7845 5.8565 14.8479 5.70323 14.8479 5.54341C14.8479 5.38359 14.7845 5.23032 14.6714 5.11731Z" fill={fill} stroke={fill} stroke-width="0.3" />
            <path id="Vector_9" d="M12.6321 9.05513C12.6321 8.89531 12.5686 8.74204 12.4556 8.62903C12.3426 8.51603 12.1893 8.45254 12.0295 8.45254H5.26118C5.10137 8.45254 4.9481 8.51603 4.83509 8.62903C4.72208 8.74204 4.65859 8.89531 4.65859 9.05513C4.65859 9.21494 4.72208 9.36821 4.83509 9.48122C4.94809 9.59423 5.10137 9.65771 5.26118 9.65771H12.0295C12.1893 9.65771 12.3426 9.59423 12.4556 9.48122C12.5686 9.36821 12.6321 9.21494 12.6321 9.05513Z" fill={fill} stroke={fill} stroke-width="0.3" />
            <path id="Vector_10" d="M5.26118 11.9623C5.10137 11.9623 4.9481 12.0258 4.83509 12.1388C4.72208 12.2518 4.65859 12.4051 4.65859 12.5649C4.65859 12.7247 4.72208 12.878 4.83509 12.991C4.9481 13.104 5.10137 13.1675 5.26118 13.1675H8.02378C8.1836 13.1675 8.33687 13.104 8.44987 12.991C8.56288 12.878 8.62637 12.7247 8.62637 12.5649C8.62637 12.4051 8.56288 12.2518 8.44987 12.1388C8.33687 12.0258 8.1836 11.9623 8.02378 11.9623H5.26118Z" fill={fill} stroke={fill} stroke-width="0.3" />
        </g>
    </svg>

);
export default PropertyIcon;
