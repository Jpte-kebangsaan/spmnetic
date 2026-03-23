function openVideo(videoUrl, title) {
    document.getElementById('videoModal').style.display = 'block';
    document.getElementById('mainVideo').src = videoUrl;
    document.getElementById('videoTitle').innerText = title;
}

function closeVideo() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('mainVideo').src = ""; // Berhenti main video bila tutup
}

// Tutup modal jika user klik luar kotak video
window.onclick = function(event) {
    let modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideo();
    }
}
