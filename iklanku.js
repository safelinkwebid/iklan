var jumlah_iklan = 2;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds()
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan +=1;
if (pasang_iklan==1) {
txt="Gabung Reseller";
url="https://www.tokomarlan.com/";
alt="Reseller";
banner="https://blogger.googleusercontent.com/img/a/AVvXsEgvDvcxN-f0GGpiD0EmJX4eEPv5GrK029CpLtb1vBbSpKG7AuztvqhIHudmhG_WNToHhGYda8OhwVtsvHAXEeMX8v443K3Z8FqxcUwSALlEgE1jYPqPE_ZngokbQBlhk1gQl8HicULOERKNNmt3MANVfyAqx5n4dh4VRdeGE0dAt3lVcHhIBUB68kBs4Q=s250";
width="250";
height="250";
}
if (pasang_iklan==2) {
txt="Jasa Buat Website Murah";
url="https://www.jasabuat.web.id";
alt="Jasa Buat Website Murah";
banner="https://1.bp.blogspot.com/-l-F9jUyhmpI/YaJPZBbgDWI/AAAAAAAADxQ/K3LBKypS_-gMwmqNbpCSBAaDQUqKYk3xgCLcBGAsYHQ/s250/Jasa%2BBuat%2BWebsite%2BAgen%2BPulsa.JPG";
width="250";
height="250";
}
document.write('<center>');
document.write('<a href=\"' + url + '\" target=\"_blank\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('alt=\"' + alt + '\" title=\"' + txt + '\">');
document.write('</center>');

