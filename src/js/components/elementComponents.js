const getMobileFormElement = `
      <form id="get_mobile_form" class="col-12 d-flex flex-wrap justify-content-center p-0  ">
                    <label class="col-12 p-0  d-flex position-relative justify-content-center ">
                        <span id="icon_check" class="position-absolute icon-input d-none">
                            <img src="src/icon/tick.svg" alt="">
                        </span>
                        <input id="user_mobile" maxlength="11" autocomplete="off" type="tel" class="col-12 d-flex w-382px text-white h-72px rounded-4 input-styles text-center" placeholder="شماره موبایل خود را وارد نمایید">
                    </label>
                    <button type="submit" class="col-12 rounded-4 p-0  m-0 mt-3 text-white  btn-orange p-3 d-flex justify-content-center align-items-center">
                        <img src="src/icon/arrow-left.svg" class="img-fluid" alt="">
                        بریم برا تولد
                    </button>
      </form>
`
const getOtpFormElement = `
      <form id="get_otp_form" class="col-12 d-flex flex-wrap justify-content-center p-0  ">
                    <label class="col-12 p-0 d-flex position-relative justify-content-center ">
                        <div id="inputs" class="col-12 p-0 d-flex justify-content-evenly">
                            <input autofocus type="text" maxlength="1"
                                   class="input-styles text-white input-styles-otp  col-1 text-center" name=""
                                   placeholder="-">
                            <input type="text" maxlength="1"
                                   class="input-styles text-white input-styles-otp col-1 text-center" name=""
                                   placeholder="-">
                            <input type="text" maxlength="1"
                                   class="input-styles text-white input-styles-otp col-1 text-center" name=""
                                   placeholder="-">
                            <input type="text" maxlength="1"
                                   class="input-styles text-white input-styles-otp col-1 text-center" name=""
                                   placeholder="-">
                            <input type="text" maxlength="1"
                                   class="input-styles text-white input-styles-otp col-1 text-center" name=""
                                   placeholder="-">
                        </div>
                    </label>
                    <button type="submit" class="col-12 rounded-4 p-0  m-0 mt-3 text-white  btn-orange p-3 d-flex justify-content-center align-items-center">
                        کد تایید رو وارد کن
                          <img src="src/icon/like.svg" class="img-fluid" alt="">
                    </button>
                    <div class="col-12 d-flex justify-content-center mt-3">
                       <button class="btn fs-14px rounded-5 text-white border bg-opacity-25">
                         00:59
                        <img src="src/icon/clock.svg" class="img-fluid" alt="">
                       </button>
                   <button disabled class="btn btn-outline-light ms-2   fs-14px rounded-5   pt-0 bg-opacity-25">
                   ارسال مجدد کد تایید
                   </button>
                  </div>
                </form>
`
const happyBirthDayElanza = `
<h3 dir="auto" class="hpd-text  w-382px">
    تولد دو سالگی الانزا مبارک :)
</h3>
<div class="ready-test d-flex flex-wrap justify-content-center align-content-center col-12">
    <h3 class="col-12 text-center m-0 p-0 fw-bold">
        آماده ای شمع‌هارو فوت کنی؟
    </h3>
    <button onclick="statusModalHandler('readyToTest')" type="button" id="ready_test"
            class="btn col-md-auto col-12 btn-linear-orange rounded-4 mt-4 p-3 fs-5 text-white">
        آرهههه
        <img src="src/icon/like.svg" alt="" class="img-fluid">
    </button>
</div>
`
const readyToTestModal = `
    <modalBody>
                <div class="col-12 d-flex p-0 m-0 justify-content-end">
                    <img onclick="statusModalHandler('hide-modal')" src="src/icon/close-circle.svg" class="w-30px cursor-pointer h-30px" alt="">
                </div>
                <div class="col-12 d-flex flex-md-row-reverse flex-row  justify-content-center align-content-start flex-wrap">
                    <section dir="auto"  class="col-12 col-md-6  row text-dark m-0 p-0 justify-content-center align-content-start">
                        <h4 class="col-12 m-0  fw-bold text-center ">خب رفیق!</h4>
                        <div class="col-12  p-0  p-2 d-flex flex-wrap">
                            <div class="col-12 p-0 m-0 my-3  text-center fs-5">
                                قبل از فوت باید تست فوت بدی :)
                            </div>
                            <p class="col-12 p-2 rounded-4 bg-warm text-center">
                                به هرحال فوت کردن کار آسونی نیست!!
                                <br>
                                <br>
                                برای خاموش کردن شمع روی دکمه تست فوت کلیک کن بعدش اگر نیاز بود دسترسی میکروفون
                                رو به ما بده....
                                <br>
                                <br>
                                و توی میکروفونت بلند فوت کن
                            </p>
                        </div>
                    </section>
                    <section class="col-12 col-md-6 row m-0 p-0 justify-content-center align-content-end">
                        <button onclick="statusModalHandler('blow')" dir="rtl" class="btn btn-orange rounded-4 col-8 mb-3 p-3 fs-5 text-white">
                            <img src="src/icon/like.svg" alt="" class="img-fluid">
                            تست فوت!
                        </button>
                        <button onclick="statusModalHandler('hand')" dir="rtl" class="border border-dark bg-white rounded-4 p-0 col-8 my-3 py-3 text-center">
                            با دست خاموشش میکنم!
                        </button>
                        <figure class="col-12 p-0 d-flex justify-content-center align-items-center">
                            <img src="src/icon/wind.svg" alt="">
                        </figure>
                    </section>
                </div>
            </modalBody>
`
const getUserVoiceModal = `
    <modalBody>
        <div class="col-12  d-flex p-0 m-0 justify-content-end">
            <img onclick="statusModalHandler('hide-modal')" src="src/icon/close-circle.svg" class="w-30px cursor-pointer h-30px" alt="">
        </div>
        <section dir="auto" class="w-100 user-select-none d-flex align-content-start flex-wrap text-dark">
            <h5 class="col-12 p-0 m-0 text-center fw-bold ">فوت کن :)</h5>
            <p class="w-100 p-0 m-0 text-center my-4">توی میکروفون گوشیت فوت کن!</p>
            <figure title="فوت کن :)" class="col-12 p-0 d-flex justify-content-center align-items-center">
                <img src="src/icon/wind.svg" alt="">
            </figure>
        </section>
    </modalBody>
`
const blowModal = `
   <modalBody>
        <div class="col-12  d-flex p-0 m-0 justify-content-end">
            <img onclick="statusModalHandler('hide-modal')" id="close_modal" src="src/icon/close-circle.svg" class="w-30px cursor-pointer h-30px" alt="">
        </div>
        <section dir="auto" class="w-100 user-select-none d-flex align-content-start flex-wrap text-dark">
            <h5 class="col-12 p-0 m-0 text-center fw-bold ">فوت کن :)</h5>
            <p class="w-100 p-0 m-0 text-center my-4">توی میکروفون گوشیت فوت کن!</p>
            <figure title="فوت کن :)" class="col-12 p-0 d-flex justify-content-center align-items-center">
                <img src="src/icon/wind.svg" alt="">
            </figure>
        </section>
    </modalBody>
`
const successModal = `
      <modalBody>
        <div class="col-12 d-flex p-1 m-0 justify-content-end">
            <img onclick="statusModalHandler('hide-modal')" src="src/icon/close-circle.svg" class="w-30px cursor-pointer h-30px" alt="">
        </div>
        <div dir="auto" class="col-12 d-md-none text-dark d-flex flex-wrap p-1">
            <h4 class="col-12 col-md-6 m-0  fw-bold text-center ">تبریک میگم!</h4>
            <div class="col-12 p-0 m-0 my-4 px-4 text-center">
                تو یه فوتر حرفه ای هستی و برای
                فوت کردن شمع الانزا برگزیده شدی :)
            </div>
        </div>
        <section class="col-12 mb-3 col-md-6 row m-0 p-0 justify-content-center align-content-end">
            <figure class="col-12 p-0 d-flex h-200px pb-3 justify-content-center align-items-center">
                <img src="src/icon/success.svg" class="img-fluid" alt="">
            </figure>
        </section>
        <section dir="auto"  class="col-12 col-md-6 row text-dark m-0 p-0 justify-content-center align-content-end">
            <h4 class="col-12 m-0 d-none justify-content-center d-md-flex fw-bold">تبریک میگم!</h4>
            <div class="col-12  p-0  p-2 d-flex flex-wrap">
                <div class="col-12 d-none d-md-flex p-0 m-0 my-3 px-4 text-center">
                    تو یه فوتر حرفه ای هستی و برای
                    فوت کردن شمع الانزا برگزیده شدی :)
                </div>
                <div class="col-12 p-2 rounded-4  text-center">
                    قبلش آرزو یادت نره
                    <br>
                    <button onclick="statusModalHandler('readyToBlowing')" dir="rtl" class="btn btn-orange rounded-4 col-auto my-3 p-3  text-white">
                        <img src="src/icon/candle.svg" alt="" class="img-fluid">
                        بریم برای فوت کردن شمع
                    </button>
                </div>
            </div>
        </section>
    </modalBody>
`
const failedModal = `
    <modalBody>
        <div class="col-12 d-flex p-0 m-0 justify-content-end">
            <img onclick="statusModalHandler('hide-modal')" src="src/icon/close-circle.svg" class="w-30px cursor-pointer h-30px" alt="">
        </div>
        <div dir="auto" class="col-12 d-md-none text-dark d-flex flex-wrap p-1">
            <h4 class="col-12 col-md-6 m-0  fw-bold text-center ">متاسفم</h4>
            <div class="col-12 p-0 m-0 my-4 px-5 text-center">
                ظاهرا شمع خاموش نمیشه!
                باید با دست خاموشش کنی :(
            </div>
        </div>
        <section class="col-12 col-md-6 row m-0 p-0 justify-content-center align-content-end">
            <figure class="col-12 p-0 d-flex h-200px pb-3 justify-content-center align-items-center">
                <img src="src/icon/failed.svg" class="img-fluid" alt="">
            </figure>
        </section>
        <section dir="auto"  class="col-md-6 col-12 row text-dark m-0  justify-content-center align-content-end">
            <h4 class="col-12 m-0 d-none d-md-flex justify-content-center fw-bold  ">متاسفم</h4>
            <div class="col-12 p-0  p-2 d-flex flex-wrap">
                <div class="col-12 p-0 m-0 my-3 d-none d-md-flex justify-content-center w-300px px-5">
                    ظاهرا شمع خاموش نمیشه!
                    باید با دست خاموشش کنی :(
                </div>
                <div class="col-12 p-2 rounded-4  text-center">
                    قبلش آرزو یادت نره
                    <br>
                    <button onclick="statusModalHandler('failed')" dir="rtl" class="btn btn-orange rounded-4 col-auto my-3 p-3  text-white">
                        <img src="src/icon/like.svg" alt="" class="img-fluid">
                        با دست خاموشش میکنم!
                    </button>
                </div>
            </div>
        </section>
    </modalBody>
`
const readyToBlowingText = `
<h3 dir="auto" class="w-382px lh-base fw-bold px-3 text-center ">
فوت کن تا هدیتو بگیری!
</h3>
 <figure class="col-12 p-0 d-flex justify-content-center  align-items-center">
                            <img src="src/icon/wind-white.svg" alt="">
</figure>

`
const clickTurnOffText = `
<h3 dir="auto" class="w-382px lh-base fw-bold px-3 text-center ">
    کلیک کن رو شمعا تا خاموش بشن و هدیتو بگیری :)
</h3>
`
const bonusModal = `
    <modalBody class="overflow-visible w-382px h-512px">
                <figure class="col-12 m-0 h-200px position-relative p-0 d-flex justify-content-center ">
                    <img src="src/images/gift.svg" class="img-fluid image-gift " alt="">
                </figure>
                <section dir="auto" class="w-100 user-select-none d-flex justify-content-center align-content-start flex-wrap text-dark">
                    <h5 class="col-12 p-0 m-0 text-center fw-bold ">مرسی اومدی تولدمون</h5>
                    <p class="w-100 p-0 m-0 text-center my-4">کد تخفیف 150 هزارتومانی تولد الانزا</p>
                    <div  class="border-orange my-3 bg-orange-opacity col-12 d-flex justify-content-between align-items-center w-250px rounded-4 p-2 ">
                        <div class="rounded-3 ">
                            <img src="src/icon/voucher.svg" alt="">
                        </div>
                        <strong id="voucher_element" class="text-orange">
                            HBD21414xfewfey
                        </strong>
                        <button onclick="copyValue()" class="rounded-3 w-30px h-30px bg-orange">
                            <img src="src/icon/copy.svg" alt="">
                        </button>
                    </div>
                    <div class="w-250px my-2 text-center">
                        اینم کادوی الانزا به تو :)
                    </div>
                    <div class="col-12 my-3 d-flex justify-content-center align-items-center">
                        <a href="https://elanza.com" target="_blank" class="rounded-4 text-decoration-none  btn-orange text-white p-3  ">
                            <img src="src/icon/shop.svg" alt="">
                            بریم برای خرید از سایت
                        </a>
                    </div>
                </section>
            </modalBody>

`
