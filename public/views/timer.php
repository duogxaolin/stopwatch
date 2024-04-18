<?php
$title = "Đồng hồ Đếm ngược";
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/header.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/navbar.php');
?>
<main id="main" data-module="timer" class="w-screen flex">
    <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
        <div id="adngin-sidebar_left-0"></div>
    </div>
    <div class="w-full max-w-3xl mx-auto p-5">
        <div class="w-full block sm:hidden mx-auto text-center mb-5 min-h-[50px]">
            <div id="adngin-top_leaderboard-0"></div>
        </div>
        <div id="alarm-set-container">
            <div class="">
                <h2 class="font-semibold text-xl">Đặt một đồng hồ hẹn giờ</h2>
                <div class="columns-3">
                    <div id="hours-container" class="form-control w-full"><label for="hours" class="label"><span class="label-text">Số giờ</span></label><select id="hours" class="select select-bordered update-hash">
                            <option value='00'>00</option>
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                            <option value='03'>03</option>
                            <option value='04'>04</option>
                            <option value='05'>05</option>
                            <option value='06'>06</option>
                            <option value='07'>07</option>
                            <option value='08'>08</option>
                            <option value='09'>09</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                        </select></div>
                    <div id="minutes-container" class="form-control w-full"><label for="minutes" class="label"><span class="label-text">Số phút</span></label><select id="minutes" class="select select-bordered update-hash">
                            <option value='00'>00</option>
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                            <option value='03'>03</option>
                            <option value='04'>04</option>
                            <option value='05'>05</option>
                            <option value='06'>06</option>
                            <option value='07'>07</option>
                            <option value='08'>08</option>
                            <option value='09'>09</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                            <option value='32'>32</option>
                            <option value='33'>33</option>
                            <option value='34'>34</option>
                            <option value='35'>35</option>
                            <option value='36'>36</option>
                            <option value='37'>37</option>
                            <option value='38'>38</option>
                            <option value='39'>39</option>
                            <option value='40'>40</option>
                            <option value='41'>41</option>
                            <option value='42'>42</option>
                            <option value='43'>43</option>
                            <option value='44'>44</option>
                            <option value='45'>45</option>
                            <option value='46'>46</option>
                            <option value='47'>47</option>
                            <option value='48'>48</option>
                            <option value='49'>49</option>
                            <option value='50'>50</option>
                            <option value='51'>51</option>
                            <option value='52'>52</option>
                            <option value='53'>53</option>
                            <option value='54'>54</option>
                            <option value='55'>55</option>
                            <option value='56'>56</option>
                            <option value='57'>57</option>
                            <option value='58'>58</option>
                            <option value='59'>59</option>
                        </select></div>
                    <div id="seconds-container" class="form-control w-full"><label for="seconds" class="label"><span class="label-text">Số giây</span></label><select id="seconds" class="select select-bordered update-hash">
                            <option value='00'>00</option>
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                            <option value='03'>03</option>
                            <option value='04'>04</option>
                            <option value='05'>05</option>
                            <option value='06'>06</option>
                            <option value='07'>07</option>
                            <option value='08'>08</option>
                            <option value='09'>09</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                            <option value='32'>32</option>
                            <option value='33'>33</option>
                            <option value='34'>34</option>
                            <option value='35'>35</option>
                            <option value='36'>36</option>
                            <option value='37'>37</option>
                            <option value='38'>38</option>
                            <option value='39'>39</option>
                            <option value='40'>40</option>
                            <option value='41'>41</option>
                            <option value='42'>42</option>
                            <option value='43'>43</option>
                            <option value='44'>44</option>
                            <option value='45'>45</option>
                            <option value='46'>46</option>
                            <option value='47'>47</option>
                            <option value='48'>48</option>
                            <option value='49'>49</option>
                            <option value='50'>50</option>
                            <option value='51'>51</option>
                            <option value='52'>52</option>
                            <option value='53'>53</option>
                            <option value='54'>54</option>
                            <option value='55'>55</option>
                            <option value='56'>56</option>
                            <option value='57'>57</option>
                            <option value='58'>58</option>
                            <option value='59'>59</option>
                        </select></div>
                </div>
            </div>
            <div class="mt-6 grid grid-rows-4 sm:grid-rows-3 grid-flow-col place-content-between gap-4">
                <div data-countdown="15" data-title="15 giây" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>15 giây</span></div>
                <div data-countdown="20" data-title="20 giây" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>20 giây</span></div>
                <div data-countdown="30" data-title="30 giây" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>30 giây</span></div>
                <div data-countdown="45" data-title="45 giây" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>45 giây</span></div>
                <div data-countdown="60" data-title="1 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>1 phút</span></div>
                <div data-countdown="300" data-title="5 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>5 phút</span></div>
                <div data-countdown="600" data-title="10 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>10 phút</span></div>
                <div data-countdown="900" data-title="15 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>15 phút</span></div>
                <div data-countdown="1200" data-title="20 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>20 phút</span></div>
                <div data-countdown="1500" data-title="25 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>25 phút</span></div>
                <div data-countdown="1800" data-title="30 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>30 phút</span></div>
                <div data-countdown="2700" data-title="45 phút" class="link link-primary link-hover flex items-center gap-2 timer-set"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 md:h-4 md:w-4 hidden sm:inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg><span>45 phút</span></div>
            </div>
            <div class="mt-6 gap-1">
                <div class="flex mb-3">
                    <h2 class="font-semibold text-xl"> Âm thanh báo thức <svg aria-label="Kiểm tra âm thanh" id="test-start" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block cursor-pointer h-4 w-4 md:h-5 md:w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg><svg aria-label="Dừng" id="test-stop" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden inline-block cursor-pointer h-4 w-4 md:h-5 md:w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                        </svg></h2>
                </div>
                <div class="columns-1">
                    <div id="sound-container" class="form-control w-full"><select aria-label="Âm thanh báo thức" id="sound" class="select select-bordered">
                            <option value="clock">Đồng hồ báo thức</option>
                            <option value="buzzer">Tiếng kèn</option>
                            <option value="roosters">Tiếng gà gáy</option>
                            <option value="police-siren">Tiếng còi</option>
                            <option value="nuclear">Tiếng báo động hạt nhân</option>
                            <option value="bomb-explosion">Tiếng bom</option>
                        </select></div>
                </div>
            </div>
            <div class="mt-6">
                <h2 id="alarm-title-heading" class="font-semibold text-xl mb-3">Tên của đồng hồ hẹn giờ</h2>
                <div class="columns-1"><input id="alarm-title" aria-labelledby="alarm-title-heading" type="text" value="Đồng hồ hẹn giờ" class="input input-bordered w-full" /></div>
            </div>
        </div>
        <div class="fullscreen text-center hidden" id="alarm-remaining-container">
            <div class="grid tabular-nums mb-4">
                <div class="col-span-full row-span-full z-10">
                    <div id="remaining-elapsed" class="radial-progress text-primary" data-style="--value:100; --size:36rem; --thickness: 1rem;" style="--value:100; --size:36rem; --thickness: 1rem;"></div>
                </div>
                <div class="col-span-full row-span-full">
                    <div id="remaining-mask" class="radial-progress text-neutral" data-style="--value:100; --size:36rem; --thickness: 1rem;" style="--value:100; --size:36rem; --thickness: 1rem;">
                        <div class="font-semibold text-base-content break-words max-w-[66%] text-xl sm:text-2xl flex justify-center items-center gap-2 my-0 mx-auto"><span id="remaining-title"></span></div>
                        <div class="text-primary mt-12 mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" id="remaining-text"></div>
                        <div class="text-orange-400 text-xl sm:text-2xl flex justify-center items-center gap-2" id="remaining-destination-container"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 md:h-5 md:w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg><span data-format="HH:mm" id="remaining-destination"></span></div>
                    </div>
                </div>
            </div>
            <div class="mt-6 grid place-items-center"><progress id="remaining-elapsed-percent" class="progress progress-primary col-start-1 row-start-1 w-64 h-5 bg-base-100 [--rounded-box:0]" value="0" max="100"></progress>
                <div id="remaining-elapsed-percent-text-container" class="col-start-1 row-start-1 z-20 text-xs"><span id="remaining-elapsed-percent-text">0</span>%</div>
            </div>
        </div>
        <div class="mt-6 flex flex-wrap justify-center gap-4"><button id="start" class="btn btn-primary grow">Bắt đầu hẹn giờ</button><button id="resume" class="btn btn-success hidden grow">Tiếp tục</button><button id="pause" class="btn btn-warning hidden grow">Tạm dừng</button><button id="restart" class="btn btn-accent hidden grow">Khởi động lại</button><button id="stop" class="btn btn-error hidden grow">Dừng</button></div>
        <div class="hidden mt-6" id="storage">
            <div class="prose mx-auto overflow-x-auto max-w-full">
                <h2>Dữ liệu của đồng hồ hẹn giờ</h2>
                <table data-time-format="HH:mm" data-date-format="DD/MM/YYYY - HH:mm" id="storage-table" class="table table-sm w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Đồng hồ hẹn giờ</th>
                            <th>Đã bắt đầu</th>
                            <th>Đã dừng lại</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="mt-6 flex justify-center gap-x-4 w-full"><button id="export-csv" class="btn btn-outline btn-success grow">Xuất dưới dạng CSV</button><button id="clear-history" class="btn btn-outline btn-error grow">Xóa dữ liệu</button></div>
            </div>
        </div>
        <div class="w-full block mx-auto text-center my-6 min-h-[50px]">
            <div id="adngin-incontent_1-0"></div>
        </div>
        <div class="my-10" id="content">
            <article class="prose max-w-full">
                <h2>Làm thế nào để đặt đồng hồ hẹn giờ trên máy tính?</h2>
                <p>Bạn có thể sử dụng một đồng hồ hẹn giờ online miễn phí thông qua máy tính trên bất kì trình duyệt nào. Bạn cũng có thể truy cập mạng internet để sử dụng công cụ này mà không cần tải về bất kì một ứng dụng nào cả. Đây là cách dễ nhất để đặt một đồng hồ hẹn giờ trực tuyến.</p>
                <h2>Đồng hồ Hẹn giờ Đếm ngược Online là gì?</h2>
                <p>Đồng hồ hẹn giờ online là một loại đồng hồ vận hành thông qua máy tính, dễ sử dụng, và có khả năng đếm ngược trên màn hình máy tính. Bạn có thể đặt một đồng hồ hẹn giờ theo giờ, phút, giây một cách dễ dàng và nhanh chóng trên bất kì máy tính hay thiết bị di động nào. Sau khi đã cài đặt hẹn giờ, tín hiệu âm thanh <a href="/vi/">báo động trực tuyến</a> sẽ phát ra theo âm lượng được điều chỉnh trên máy tính của bạn.</p>
                <h2>Làm thế nào để đặt một đồng hồ hẹn giờ online?</h2>
                <p>Đồng hồ hẹn giờ rất dễ sử dụng, và bạn có thể khởi động nó bằng cách thực hiện các bước đơn giản:</p>
                <ul>
                    <li>Đặt <strong>Số giờ</strong>, <strong>Số phút</strong> và <strong>Số giây</strong> mà bạn muốn hẹn giờ hoặc chọn một số phút hoặc giây bất kì có sẵn từ danh sách tuỳ chọn.</li>
                    <li>Cài đặt <strong>Âm thanh báo động</strong> bằng cách nhấn vào dấu mũi tên rồi chọn một loại âm thanh từ danh sách tuỳ chọn.</li>
                    <li>Đặt <strong>Tên đồng hồ hẹn giờ</strong> hoặc dùng tên mặc định có sẵn.</li>
                    <li>Nhấn vào nút <strong>Bắt đầu hẹn giờ</strong> để bắt đầu quá trình hẹn giờ của bạn.</li>
                </ul>
                <p>Để đặt nhiều đồng hồ hẹn giờ hơn, hãy mở một cửa sổ trình duyệt mới và lặp lại các bước ở trên.</p>
                <h2>Đồng hồ Hẹn giờ Đếm ngược Online hoạt động như thế nào?</h2>
                <p>Sau khi đặt đồng hồ hẹn giờ, đồng hồ hẹn giờ của bạn sẽ bắt đầu đếm ngược. Trên màn hình, bạn có thể kiểm tra thời gian đến giờ hẹn còn lại bao nhiêu và thời gian hẹn giờ kết thúc vào lúc nào thông qua <a href="/clock/vi/">đồng hồ kỹ thuật số</a>. Cũng giống như <a href="/stopwatch/vi/">đồng hồ bấm giờ</a>, một thanh tiến trình sẽ xuất hiện để cho biết tỷ lệ thời gian đã được đếm ngược. Sau khi hoàn thành, âm thanh báo động mà bạn đã chọn sẽ vang lên. Hãy đảm bảo rằng bạn đẫ bật âm trên máy tính để có thể nghe được âm thanh báo động.</p>
                <p>Trong khi đồng hồ hẹn giờ đang chạy, bạn có thể:</p>
                <ul>
                    <li>Nhấn nút <strong>Tạm dừng</strong> để tạm dừng đồng hồ hẹn giờ của bạn.</li>
                    <li>Nhấn nút <strong>Tiếp tục</strong> để tiếp tục đồng hồ hẹn giờ của bạn.</li>
                    <li>Nhấn nút <strong>Khởi động lại</strong> để dừng đồng hồ hẹn giờ và bắt đầu giờ hẹn mới.</li>
                    <li>Nhấn nút <strong>Dừng</strong> để dừng hẳn đồng hồ hẹn giờ của bạn và đặt một đồng hồ hẹn giờ mới.</li>
                </ul>
                <p>Khi (các) đồng hồ hẹn giờ của bạn bạn đang chạy, một bảng liệt kê sẽ xuất hiện dưới mục <strong>Dữ liệu hẹn giờ</strong>.</p>
                <p>Bảng này sẽ cho bạn biết tên, thời lượng và dấu thời gian của các đồng hồ hẹn giờ mà bạn đã đặt. Để lưu dữ liệu, hãy nhấn vào nút Xuất dưới dạng tệp CSV.</p>
                <h2>Tôi có thể dùng Đồng hồ hẹn giờ online ở đâu?</h2>
                <p>Bạn có thể tạo đồng hồ hẹn giờ thông qua bất kì máy tính hoặc thiết bị di động nào có kết nối internet hoặc Wi-Fi. Vì đồng hồ hẹn giờ đếm ngược xuất hiện trên một màn hình lớn, nó được xem là một công cụ tuyệt vời để sử dụng ở lớp học, khi nấu ăn, học tập hay khi làm bài kiểm tra hoặc luyện tập thể thao. Nếu bạn muốn bắt đầu một đồng hồ hẹn giờ đếm ngược theo ngày và giờ, hãy sử dụng <a href="/countdown/vi/">đồng hồ đếm ngược trực tuyến online</a>.</p>
                <h2>Đồng hồ Hẹn giờ Đếm ngược Online có hoạt động khi thiết bị đang ở chế độ ngủ không?</h2>
                <p>Không, không có loại đồng hồ hẹn giờ đếm ngược online nào hoạt động khi máy tính của bạn đang ở chế độ chờ hoặc chế độ ngủ.</p>
            </article>
        </div>
    </div>
    <div class="mx-auto text-center min-w-[160px] xxl:min-w-[300px] max-h-[600px] hidden lg:block">
        <div id="adngin-sidebar_right-0"></div>
    </div>
</main>
<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/public/includes/footer.php');
?>
<script src="/assets/js/times.js?id=34b778177a771d9a5fb6a2936481f562"></script>
</body>

</html>