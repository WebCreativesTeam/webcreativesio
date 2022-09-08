import styles from "./newsLetter.module.css";

const NewsLetter = () => {
  return (
    <section>
      <div className="relative max-w-[1300px] mx-auto">
        <div className={styles.svgHolder}>
          <svg viewBox="0 0 270 336" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5801 246.421C20.1132 235.237 28.1183 225.612 38.5999 218.355C40.022 217.373 40.2826 216.13 40.1956 214.521C39.9135 209.303 40.5479 204.172 41.501 199.059C44.3718 183.647 50.4696 169.725 58.9497 156.865C71.1677 138.346 85.2374 121.644 102.646 108.247C104.402 106.893 105.115 105.376 105.219 103.068C105.567 95.3065 107.734 88.1545 112.151 81.7875C119.553 71.1083 128.01 61.442 137.319 52.5742C153.544 37.1236 172.422 26.8523 193.616 21.1864C207.719 17.4171 222.08 14.9386 236.427 12.4183C240.413 11.7203 244.408 11.072 248.396 10.3999C248.401 10.1298 248.408 9.85578 248.418 9.58771C246.339 8.8922 244.269 8.17088 242.179 7.50912C240.778 7.06398 239.508 6.38456 238.507 5.27033C236.851 3.42124 237.388 1.21129 239.681 0.401699C240.97 -0.0546907 242.297 0.128323 243.612 0.315305C249.185 1.11295 254.674 2.40701 260.179 3.57596C261.798 3.92188 263.402 4.36906 264.979 4.87183C267.406 5.65082 268.945 7.35891 269.325 10.0139C269.688 12.5656 268.219 14.0644 266.355 15.3169C261.073 18.874 256.159 22.9613 251.174 26.9474C248.988 28.6962 246.806 30.457 244.609 32.1899C243.596 32.9899 242.455 33.5834 241.289 32.6359C240.03 31.6149 240.232 30.1873 240.744 28.8431C240.983 28.2137 241.415 27.6558 241.786 27.086C243.287 24.7949 245.133 22.8136 246.962 20.8184C247.841 19.8596 249.021 19.1569 249.695 17.8128C248.871 17.3618 248.241 17.6178 247.625 17.7567C229.204 21.8764 210.679 25.5255 192.563 31.0352C182.36 34.1363 172.617 38.3515 163.449 43.9886C145.774 54.8599 131.687 69.7868 119.458 86.7675C117.035 90.1286 115.187 93.9149 114.493 98.8214C116.115 97.7297 117.309 96.9655 118.46 96.1437C127.104 89.9743 136.551 85.624 146.61 82.7452C156.913 79.7911 167.036 80.0517 176.983 84.6809C186.926 89.308 188.426 100.657 185.015 108.319C182.785 113.324 179.622 117.559 175.48 120.953C164.67 129.805 152.398 134.15 138.634 133.835C126.781 133.562 117.149 128.512 109.535 119.09C107.532 116.613 107.394 116.615 104.817 118.785C94.3109 127.637 84.8318 137.537 76.5246 148.681C70.4856 156.779 64.7257 165.068 59.9247 174.022C54.3073 184.489 51.0644 195.827 49.3228 207.657C49.1815 208.63 48.8239 209.688 49.4738 210.654C50.4721 210.987 51.1849 210.318 51.9225 209.896C55.5047 207.845 59.218 206.087 62.9941 204.485C69.7346 201.622 76.7478 200.285 84.0213 201.069C96.902 202.45 103.056 210.905 101.487 224.364C99.6691 239.985 83.8447 251.333 70.3396 247.829C63.5623 246.074 57.4613 243.189 52.2937 238.218C48.9322 234.99 46.0939 231.332 43.8206 227.205C43.0109 225.729 42.1816 225.588 40.936 226.608C38.1529 228.873 35.4173 231.188 32.8393 233.709C27.3119 239.113 23.106 245.575 19.147 252.246C12.7199 263.069 8.31228 274.69 7.17875 287.434C5.44282 306.973 17.0623 326.29 36.9305 330.956C38.6632 331.361 40.375 331.731 42.1389 331.096C42.9981 330.787 43.9542 330.572 44.3235 331.807C44.6566 332.91 43.8831 333.517 43.1227 334.007C41.2303 335.23 39.1261 335.196 37.0255 334.955C30.6477 334.233 24.7067 332.007 19.5193 328.152C4.92737 317.296 -1.38849 302.316 0.543847 283.788C1.94605 270.272 6.81596 258 13.5801 246.421ZM115.532 113.248C117.431 116.38 121.965 120.291 126.764 122.802C129.012 124.186 131.882 124.973 134.855 125.343C148.076 126.997 159.975 123.543 170.45 114.987C174.146 111.97 177.059 108.209 178.329 103.367C179.653 98.3332 178.11 94.7526 173.543 92.6605C166.317 89.3506 158.818 89.1581 151.221 91.0426C140.691 93.6552 131.177 98.5753 122.309 104.955C120.223 106.454 118.128 107.943 116.115 109.539C114.388 110.902 114.377 111.343 115.532 113.248ZM51.3643 223.005C54.5484 229.142 59.1863 233.781 65.14 237.343C67.8372 238.372 70.6976 239.547 73.7568 240.105C81.5564 241.527 92.1538 234.355 93.5855 223.881C94.8232 214.849 91.9142 210.612 83.2819 209.445C78.7276 208.828 74.2846 209.47 69.9105 210.794C63.7402 212.661 58.0758 215.735 52.4645 218.917C50.2326 220.185 50.1362 220.636 51.3643 223.005Z"
              fill="#FFF80A"
              fillOpacity="0.35"
            />
          </svg>

          <svg viewBox="0 0 270 336" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M256.424 246.9C249.891 235.716 241.886 226.092 231.404 218.835C229.982 217.852 229.721 216.609 229.808 215.001C230.09 209.782 229.456 204.651 228.503 199.538C225.632 184.126 219.534 170.204 211.054 157.345C198.836 138.825 184.766 122.123 167.358 108.726C165.602 107.372 164.888 105.855 164.784 103.548C164.437 95.7858 162.27 88.6339 157.853 82.2669C150.451 71.5877 141.994 61.9214 132.685 53.0536C116.46 37.603 97.582 27.3317 76.3882 21.6658C62.2849 17.8965 47.9243 15.4179 33.5769 12.8977C29.5912 12.1997 25.5959 11.5514 21.6083 10.8792C21.6029 10.6092 21.5956 10.3351 21.5864 10.0671C23.6647 9.37157 25.7354 8.65025 27.8251 7.98849C29.2258 7.54335 30.4958 6.86393 31.4968 5.7497C33.1531 3.90061 32.6164 1.69066 30.3233 0.881069C29.0335 0.424679 27.7071 0.607693 26.392 0.794675C20.8186 1.59232 15.3302 2.88638 9.82473 4.05533C8.20593 4.40125 6.60221 4.84843 5.025 5.3512C2.5975 6.13019 1.05895 7.83828 0.678773 10.4932C0.315772 13.045 1.78477 14.5438 3.64866 15.7963C8.93126 19.3534 13.8452 23.4407 18.8295 27.4267C21.0155 29.1756 23.1976 30.9363 25.395 32.6693C26.4074 33.4693 27.5491 34.0627 28.715 33.1153C29.9739 32.0943 29.7723 30.6666 29.2594 29.3225C29.021 28.693 28.5889 28.1352 28.2176 27.5654C26.7171 25.2743 24.871 23.293 23.042 21.2978C22.1626 20.3389 20.9831 19.6363 20.309 18.2922C21.1329 17.8412 21.7625 18.0972 22.379 18.236C40.8004 22.3558 59.3247 26.0048 77.4411 31.5146C87.644 34.6157 97.3867 38.8309 106.555 44.468C124.23 55.3393 138.316 70.2662 150.545 87.2468C152.969 90.608 154.817 94.3943 155.51 99.3008C153.889 98.209 152.695 97.4448 151.544 96.623C142.9 90.4536 133.453 86.1033 123.394 83.2246C113.091 80.2705 102.968 80.5311 93.021 85.1603C83.078 89.7874 81.5775 101.136 84.989 108.798C87.2192 113.803 90.3818 118.038 94.5242 121.433C105.334 130.284 117.606 134.63 131.37 134.315C143.223 134.042 152.855 128.992 160.469 119.57C162.472 117.093 162.61 117.095 165.186 119.265C175.693 128.116 185.172 138.016 193.479 149.16C199.518 157.258 205.278 165.547 210.079 174.501C215.697 184.969 218.939 196.306 220.681 208.136C220.822 209.109 221.18 210.168 220.53 211.133C219.532 211.467 218.819 210.798 218.081 210.375C214.499 208.325 210.786 206.566 207.01 204.965C200.269 202.101 193.256 200.764 185.983 201.549C173.102 202.93 166.948 211.384 168.517 224.843C170.335 240.464 186.159 251.812 199.664 248.308C206.442 246.553 212.543 243.668 217.71 238.697C221.072 235.469 223.91 231.811 226.183 227.684C226.993 226.209 227.822 226.067 229.068 227.088C231.851 229.353 234.587 231.667 237.165 234.189C242.692 239.592 246.898 246.055 250.857 252.726C257.284 263.548 261.692 275.169 262.825 287.913C264.561 307.452 252.942 326.77 233.073 331.435C231.341 331.841 229.629 332.21 227.865 331.575C227.006 331.266 226.05 331.052 225.68 332.287C225.347 333.389 226.121 333.996 226.881 334.487C228.774 335.709 230.878 335.675 232.978 335.434C239.356 334.712 245.297 332.486 250.485 328.631C265.077 317.776 271.392 302.796 269.46 284.268C268.058 270.752 263.188 258.479 256.424 246.9ZM154.472 113.727C152.573 116.859 148.038 120.77 143.239 123.281C140.992 124.666 138.122 125.453 135.148 125.823C121.928 127.476 110.029 124.022 99.5543 115.466C95.8574 112.449 92.9448 108.689 91.6745 103.846C90.3513 98.8126 91.8936 95.232 96.4607 93.1399C103.687 89.83 111.186 89.6375 118.783 91.522C129.313 94.1345 138.827 99.0547 147.695 105.435C149.78 106.933 151.876 108.422 153.889 110.018C155.616 111.382 155.627 111.823 154.472 113.727ZM218.64 223.484C215.456 229.621 210.818 234.261 204.864 237.823C202.167 238.852 199.306 240.026 196.247 240.585C188.448 242.007 177.85 234.835 176.418 224.361C175.181 215.328 178.09 211.092 186.722 209.924C191.276 209.307 195.719 209.95 200.093 211.273C206.264 213.14 211.928 216.214 217.539 219.396C219.771 220.664 219.868 221.115 218.64 223.484Z"
              fill="#FFF80A"
              fillOpacity="0.35"
            />
          </svg>
        </div>
        <div className={styles.contents}>
          <h2>newsletter subscription</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus nostrum obcaecati! Similique quisquam ut dignissimos culpa ab quos quis.</p>
          <form className="block w-full">
            <div className={styles.inputField}>
              <input type="email" placeholder = 'Enter your email address'  />
              <button className="button-secondary">subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
