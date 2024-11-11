// script.js

// 定義帽子資料，每項目包含圖片路徑、連結和描述
const hats = [
    { src: 'image/hat2.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v21/',designConcept: '設計理念', alt: '遮陽帽' ,season: '實用', newRelease: true},
    { src: 'image/hat3.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v2/',designConcept: '設計理念',  alt: '質感蝴蝶帽' ,season: '典雅', newRelease: true},
    { src: 'image/hat1.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v19/',designConcept: '設計理念',  alt: '生日帽' ,season: '造型', newRelease: true},
    { src: 'image/hat4.jpg', link: 'https://k6drk.zappar.io/3666870984989673197/v3/',designConcept: '設計理念',  alt: '大理石漁夫帽',season: '實用', newRelease: true},
    { src: 'image/hat5.jpg', link: 'https://k6drk.zappar.io/3666870984989673197/v5/',designConcept: '設計理念',  alt: '棕色漁夫帽',season: '實用', newRelease: true },
    { src: 'image/hat6.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v4/',designConcept: '設計理念',  alt: '楓葉棒球帽' ,season: '活潑', newRelease: true},
    { src: 'image/hat7.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v16/',designConcept: '設計理念',  alt: '藍大理石棒球帽',season: '活潑', newRelease: true },
    { src: 'image/hat8.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v17/',designConcept: '設計理念',  alt: '石頭棒球帽',season: '活潑', newRelease: true },
    { src: 'image/hat9.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v11/', designConcept: '設計理念', alt: '深綠彼得潘帽' ,season: '造型', newRelease: true},
    { src: 'image/hat10.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v9/', designConcept: '設計理念', alt: '淺綠彼得潘帽' ,season: '造型', newRelease: true},
    { src: 'image/hat11.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v8/', designConcept: '設計理念', alt: '白彼得潘帽',season: '造型', newRelease: true },
    { src: 'image/hat12.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v18/',designConcept: '設計理念',  alt: '黑小圓帽',season: '典雅', newRelease: true },
    { src: 'image/hat13.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v6/',designConcept: '設計理念',  alt: '粉小圓帽',season: '典雅', newRelease: true },
    { src: 'image/hat14.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v20/',designConcept: '設計理念',  alt: '安全帽' ,season: '實用', newRelease: true},
    { src: 'image/hat15.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v22/', designConcept: '設計理念', alt: '啤酒帽' ,season: '造型', newRelease: true},
    { src: 'image/hat16.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v13/', designConcept: '設計理念', alt: '棕高圓帽',season: '典雅', newRelease: true },
    { src: 'image/hat17.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v14/', designConcept: '設計理念', alt: '紅高圓帽',season: '典雅', newRelease: true },
    { src: 'image/hat18.jpg', link: 'https://6y2rv.zappar.io/5541862621400775048/v15/', designConcept: '設計理念', alt: '白高圓帽',season: '典雅', newRelease: true },
    { src: 'image/hat19.jpg', link: 'https://webxr.run/R97GargNvwR2a',designConcept: '設計理念', alt: '麻質魔術帽' ,season: '造型', newRelease: true},
    { src: 'image/hat20.jpg', link: 'https://webxr.run/eol26ap3rJeGX',designConcept: '設計理念',  alt: '布質魔術帽' ,season: '造型', newRelease: true},
    { src: 'image/hat21.jpg', link: 'https://webxr.run/baPN0MMMAx7JG',designConcept: '設計理念',  alt: '木質魔術帽',season: '造型', newRelease: true },
    { src: 'image/hat22.jpg', link: 'https://webxr.run/vGXYYyyo6zZ2', designConcept: '設計理念', alt: '麻質嬰兒帽',season: '可愛', newRelease: true },
    { src: 'image/hat23.jpg', link: 'https://webxr.run/Gbxo9DEJm48My', designConcept: '設計理念', alt: '布質質嬰兒帽' ,season: '可愛', newRelease: true},
    { src: 'image/hat24.jpg', link: 'https://webxr.run/Y9d15L9pdWz36', designConcept: '設計理念', alt: '木質嬰兒帽' ,season: '可愛', newRelease: true},
    { src: 'image/hat34.jpg', link: 'https://webxr.run/2ADn0J2G9AkRd',designConcept: '設計理念',  alt: '棉質遮陽帽' ,season: '實用', newRelease: true},
    { src: 'image/hat35.jpg', link: 'https://webxr.run/NOWGl0ZkNR1LW',designConcept: '設計理念',  alt: '布質遮陽帽' ,season: '實用', newRelease: true},
    { src: 'image/hat36.jpg', link: 'https://webxr.run/MM55pbXeeeow0',designConcept: '設計理念',  alt: '藍織質狗耳帽' ,season: '防水', newRelease: true},
    { src: 'image/hat37.jpg', link: 'https://webxr.run/77kZlygzgEAMJ',designConcept: '設計理念',  alt: '塑膠質狗耳帽' ,season: '防水', newRelease: true},
    { src: 'image/hat38.jpg', link: 'https://webxr.run/dxmg77N673yJ', designConcept: '設計理念', alt: '白毛質狗耳帽',season: '防水', newRelease: true },
    { src: 'image/hat39.jpg', link: 'https://webxr.run/r8J5Wakb0mVR', designConcept: '設計理念', alt: '棉質斗笠' ,season: '透氣', newRelease: true},
    { src: 'image/hat40.jpg', link: 'https://webxr.run/A4WVbDJy8OZ9R',designConcept: '設計理念',  alt: '木質斗笠',season: '透氣', newRelease: true },
    { src: 'image/hat41.jpg', link: 'https://webxr.run/09Y4oO6xeRE7N',designConcept: '設計理念',  alt: '布質斗笠' ,season: '透氣', newRelease: true},
    { src: 'image/hat42.jpg', link: 'https://webxr.run/8VGDX9Jx1MOW', designConcept: '設計理念', alt: '木質牛仔帽',season: '活潑', newRelease: true },
    { src: 'image/hat43.jpg', link: 'https://webxr.run/ZENXrM1pOvGxl',designConcept: '設計理念',  alt: '布質牛仔帽',season: '活潑', newRelease: true },
    { src: 'image/hat44.jpg', link: 'https://webxr.run/ENw9D81kOXpQ', designConcept: '設計理念', alt: '麻質牛仔帽',season: '實用', newRelease: true  },
    { src: 'image/hat45.jpg', link: 'https://webxr.run/ROG6M0LEM2A0',designConcept: '設計理念',  alt: '木質遮陽帽',season: 'summer', newRelease: true },

    // 按需添加更多帽子資料
]

// 顯示帽子的資料
function displayHats(hatsArray, gridClass) {
    const productGrid = document.querySelector(gridClass);
    productGrid.innerHTML = ''; // 清空內容

    hatsArray.forEach(hat => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${hat.src}" alt="${hat.alt}">
            <h3>${hat.alt}</h3>
            <button onclick="window.location.href='${hat.link}'">試用</button>
            <button onclick="window.location.href='inter/concept.html?name=${encodeURIComponent(hat.alt)}'">設計理念</button>
        `;

        productGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayAllHats();
});

function filterHats(season) {
    const filteredHats = hats.filter(hat => hat.season === season);
    displayHats(filteredHats, '.product-grid');
}

function displayAllHats() {
    displayHats(hats, '.product-grid');
}


function testRenderSingleHat() {
    const testHat = [
        { src: 'image/hat5.jpg', link: 'https://k6drk.zappar.io/3666870984989673197/v5/', designConcept: '設計理念', alt: '棕色漁夫帽', season: '實用', newRelease: true }
    ];
    
    displayHats(testHat, '.latest-grid');
}
testRenderSingleHat();



function displayAllHats() {
    displayHats(hats, '.product-grid'); // 顯示所有帽子
}
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const hatName = params.get('name') || '預設'; // 預設帽子名稱為 "預設"

    fetch('designConcepts.json') // 確保此路徑與 JSON 檔案相符
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // 從 JSON 中獲取對應的帽子資料
            const hatData = data[hatName] || data['預設'];

            // 更新網頁內容
            document.getElementById('hat-name').textContent = hatName;
            document.getElementById('hat-concept').textContent = hatData.concept;
            document.getElementById('hat-image').src = hatData.image;
            document.getElementById('hat-image').alt = `${hatName} 圖片`;

            console.log(`載入成功: ${hatName}`, hatData); // 確認載入內容
        })
        .catch(error => {
            console.error('載入設計理念時出現問題:', error);
            document.getElementById('hat-concept').textContent = '設計理念載入失敗，請稍後再試。';
            document.getElementById('hat-image').src = '../image/default.jpg'; // 顯示預設圖片
            document.getElementById('hat-image').alt = '預設圖片';
        });
});



function filterHats(season) {
    const filteredHats = hats.filter(hat => hat.season === season);
    displayHats(filteredHats, '.product-grid');
}
document.querySelector('.menu').addEventListener('click', function () {
    document.querySelector('header ul').classList.toggle('active');
});
