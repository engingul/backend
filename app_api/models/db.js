var mongoos  =require("mongoose");
var dbURI= "mongodb+srv://kullanici0:kullanici0@cluster0.pzay5na.mongodb.net/?retryWrites=true&w=majority";
//var dbURI= "mongodb://127.0.0.1/mekanbul";
mongoos.connect(dbURI);
mongoos.connection.on("connected", function(){
    console.log("Mongoose "+dbURI+" adresindeki veritabanına bağlandı\n");
});
mongoos.connection.on("error", function(){
    console.log("Bağlantıda hata oluştu\n");
});
mongoos.connection.on("disconnected", function(){
    console.log("Bağlantı kesildi\n");
});
//Uygulama kapatıldığında veritabanıda kapatılıyor
process.on("SIGINT" ,function(){
    mongoos.connection.close();
    console.log("Uygulama kapatıldı\n");
    process.exit(0);
});
require("./venue");