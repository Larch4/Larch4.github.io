/* 导航栏 */
const body = document.querySelector('body'),
shell = body.querySelector('nav'),
toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
shell.classList.toggle("close");
});

/* 视频卡片 */
document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        { title: "「薪炎永燃」", thumbnail: "./video/image/d1804ccfdd5fbff89e1013c3b309a139755f53a3.jpg@320w_200h_1c_!web-space-upload-video.jpg", videoURL:"./video/video1/index.html", views: 12000 },
        { title: "《原神》动画短片「未行之路」", thumbnail: "./video/image/2634018298737cecefaed6f4f4be500ca375db07.jpg", videoURL:"./video/video2/index.html", views: 34000 },
        { title: "微视频", thumbnail: "./video/image/illust_116416925_20240519_175605.jpg", videoURL:"./video/video3/index.html", views: 56000 },
        // 更多视频数据
    ];

    const videoGrid = document.getElementById('videoGrid');

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        const link = document.createElement('a');
        link.href = video.videoURL;
        link.target = '_blank';  // 在新标签页中打开视频播放页面

        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;

        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';

        const title = document.createElement('h3');
        title.textContent = video.title;

        const views = document.createElement('p');
        views.textContent = `播放量: ${formatViews(video.views)}`;

        videoInfo.appendChild(title);
        videoInfo.appendChild(views);

        link.appendChild(thumbnail);
        link.appendChild(videoInfo);
        videoCard.appendChild(link);
        videoGrid.appendChild(videoCard);
    });
});

function formatViews(views) {
    if (views >= 10000) {
        return (views / 10000).toFixed(1) + '万';
    }
    return views.toString();
}