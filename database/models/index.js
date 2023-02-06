const Produk = require('./products.model');
const Harga = require('./prices.model');

const User = require('./user.model');
const Enduser = require('./endusers.model');
const Kontak = require('./contact.model');
const UserStatus = require('./userstatus.model');

const Keranjang = require('./trollis.model');
const Belanja = require('./purcs.model');
const Transkasi = require('./transaksi.model');
const statusTransaksi = require('./purcstatuses.model');

const sequelize = require('./sequelize');

Harga.belongsTo(Produk,{foreignKey:'id_product'});
Produk.hasOne(Harga,{foreignKey:'id_product'}); //04022023

Enduser.belongsTo(User,{foreignKey:'id_user'});
User.hasMany(Enduser,{foreignKey:'id_user'});

Kontak.belongsTo(User,{foreignKey:'id_user'});
User.hasMany(Kontak,{foreignKey:'id_user'});

User.belongsTo(UserStatus,{foreignKey:'id_status'});
UserStatus.hasOne(User,{foreignKey:'id_status'});

Belanja.belongsTo(Keranjang,{as : 'Keranjang_Belanja',foreignKey:'id_trolli'});
Keranjang.hasMany(Belanja,{foreignKey:'id_trolli'})

Belanja.belongsTo(Produk,{foreignKey:'id_product'});
Produk.hasMany(Belanja,{foreignKey:'id_product'});

Keranjang.belongsTo(User,{as:'into_trorlli',foreignKey:'id_user', foreignKeyConstraint: true}); //
User.hasMany(Keranjang,{foreignKey:'id_user'})  

Transkasi.belongsTo(statusTransaksi,{foreignKey:'id_purcstatuses'});
statusTransaksi.hasMany(Transkasi,{foreignKey:'id_purcstatuses'});
module.exports = {
    Produk,
    Harga,
    User,
    Enduser,
    UserStatus,
    Kontak,
    Keranjang,
    Belanja,
    Transkasi,
    statusTransaksi,
    sequelize,
}