
    //General Settings 
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = "6289510497533" // ubah pake no mu
global.ownNumb = "6289510497533" // sama pake no mu
global.namebot = "Irfan - Store" // nama bot mu
global.namaowner = "Irfanstore" // nama owner/dirimu
global.web = "https://irfanstore.vercell.app" //terserah mau diubah kalau punyaweb ny mah
global.idsal = "120363289038914459@newsletter" // id saluranmu

global.mess = {
    success: 'Success ✓',
    done: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot harus jadi admin dulu wak!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Owner',
    wait: 'Sabar ya sedang proses',
    band: 'kamu telah di banned oleh owner\nminta unbanned ke owner agar bisa menggunakan fitur bot lagi',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    error: "*Maaf fitur sedang Error*",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})