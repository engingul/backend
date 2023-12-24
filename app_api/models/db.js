var mongoose  =require("mongoose");
//var dbURI= "mongodb+srv://kullanici0:kullanici0@cluster0.pzay5na.mongodb.net/mekanbul";
var dbURI= "mongodb+srv://engingul:engingul@cluster0.pzay5na.mongodb.net/mekanbul";
//var dbURI= "mongodb+srv://kullanici0:kullanici0@cluster0.pzay5na.mongodb.net/?retryWrites=true&w=majority/mekanbul";
//var dbURI= "mongodb://127.0.0.1/mekanbul";

mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log("Mongoose "+dbURI+" adresindeki veritabanına bağlandı\n");
});
mongoose.connection.on("error", function(){
    console.log("Bağlantıda hata oluştu\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("Bağlantı kesildi\n");
});
//Uygulama kapatıldığında veritabanıda kapatılıyor
process.on("SIGINT" ,function(){
    mongoose.connection.close();
    console.log("Uygulama kapatıldı\n");
    process.exit(0);
});
require("./venue");