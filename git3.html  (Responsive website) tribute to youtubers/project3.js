const reviews = [
    {
        author: 'CodeWithHarry',
        jj: 'Programmer',
        tt: 'Harry is also known as CodeWithHarry on youtube. He has a hude subscribers youtube channel. He had done his study in B.Tech Computer Science.',
        img: 'https://www.codewithharry.com/img/logo-blue.png'
    },
    {
        author: 'Jassi Sheoran',
        jj: 'YouTuber',
        tt: 'Jassi is also known as Jassi Sheoran on youtube. He has a huge subscribers youtube channel. He is pursuing B.A. from MDU Rohtak and Part Time Youtuber',
        img: 'https://yt3.ggpht.com/ytc/AKedOLRHjqTEyYUMkb1ir-TnxrZBo0EotyhtiSmpsY1jAw=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        author: 'Clever Programmer',
        jj: 'JavaScript Developer',
        tt: 'You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.',
        img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
    },
    {
        author: 'Ishan Sharma',
        jj: 'YouTube Creator',
        tt: 'He is most popular YouTube Creator with 599K subscribers and 22M+ video views. He makes freelancing, career and tech related content for students. And he have also the chance to talk with entrepreneurs like Ankur Warikoo and Noah Kagan on his channel.',
        img: 'https://yt3.ggpht.com/omDV4RX5BjOw_R3J8L-qwETRq4qqy_uN5DTo58Trg1HW6TM2ejPGuVjtRjh2BrlGpeRLgaPAtA=s176-c-k-c0x00ffffff-no-rj-mo'
    }

]



const mainImage = document.getElementById('img');
const myAuthor = document.getElementById('author');
const myJob = document.getElementById('jj');
const myText = document.getElementById('tt');
const prev = document.getElementById('mprev');
const next = document.getElementById('mnext');
const random = document.getElementById('mrandom')


let indexNum = 0;
let length = reviews.length;

next.addEventListener('click', function () {
    indexNum++;
    if (indexNum > length-1) {
        indexNum = 0;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].jj;
        myText.innerHTML = reviews[indexNum].tt;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].jj;
        myText.innerHTML = reviews[indexNum].tt;
    }
})


prev.addEventListener('click', function () {
    indexNum--;
    if (indexNum < 0) {
        indexNum = 3;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].jj;
        myText.innerHTML = reviews[indexNum].tt;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].jj;
        myText.innerHTML = reviews[indexNum].tt;
    }
})


random.addEventListener('click', function () {
    let num = Math.floor(3 * (Math.random()));

    mainImage.src = reviews[num].img;
    myAuthor.innerHTML = reviews[num].author;
    myJob.innerHTML = reviews[num].jj;
    myText.innerHTML = reviews[num].tt;
})