﻿module.exports.config = {
	name: "banned",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Xem danh sách ban của nhóm hoặc của người dùng",
	commandCategory: "system",
	usages: "[thread/user]",
	cooldowns: 5
};

module.exports.onLoad = async function ({ api }) {
    const _0x3bb2=['\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x63\x6f\x6e\x66\x69\x67','\x65\x72\x72\x6f\x72','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x6e\x64\x2f','\x31\x30\x37\x36\x33\x30\x33\x77\x59\x44\x69\x49\x4c','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x35\x30\x30','\x35\x39\x37\x37\x38\x36\x78\x56\x74\x63\x63\x54','\x31\x30\x36\x37\x37\x38\x37\x6c\x45\x48\x64\x54\x59','\x34\x34\x32\x31\x31\x33\x56\x74\x42\x47\x48\x4d','\x34\x34\x33\x31\x31\x37\x43\x4e\x43\x71\x66\x48','\x62\x61\x6e\x6e\x65\x64','\x62\x61\x6e\x6e\x65\x64\x20\x7c\x20\x57','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x72\x65\x73\x75\x6c\x74','\x32\x70\x69\x6b\x74\x6c\x49','\x6c\x65\x6e\x67\x74\x68','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b','\x3d\x3d\x3d\x3d\x3d\x3d','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x34\x30\x31','\x6e\x61\x6d\x65','\x64\x61\x74\x61','\x31\x47\x43\x7a\x44\x51\x64','\x35\x32\x34\x31\x31\x33\x42\x42\x62\x54\x77\x6a','\x31\x35\x37\x34\x39\x36\x7a\x5a\x44\x69\x50\x57','\x55\x73\x65\x72\x49\x44','\x6b\x65\x79\x73','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x70\x61\x69\x64','\x31\x7a\x68\x72\x6e\x41\x52','\x6c\x6f\x67','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x34\x30\x33'];(function(_0x507b76,_0x35a0b8){function _0x73bc68(_0x45f719,_0xb00861){return _0x4973(_0x45f719-0x255,_0xb00861);}while(!![]){try{const _0x237b31=-parseInt(_0x73bc68(0x2ce,0x2d7))+parseInt(_0x73bc68(0x2d1,0x2e2))+parseInt(_0x73bc68(0x2e4,0x2f8))*parseInt(_0x73bc68(0x2d9,0x2d4))+parseInt(_0x73bc68(0x2d3,0x2cd))+-parseInt(_0x73bc68(0x2d2,0x2e3))+-parseInt(_0x73bc68(0x2d4,0x2c8))*-parseInt(_0x73bc68(0x2c3,0x2c6))+-parseInt(_0x73bc68(0x2e3,0x2d7))*-parseInt(_0x73bc68(0x2bc,0x2cd));if(_0x237b31===_0x35a0b8)break;else _0x507b76['push'](_0x507b76['shift']());}catch(_0x330ba5){_0x507b76['push'](_0x507b76['shift']());}}}(_0x3bb2,-0x20ff1*0x1+-0x42ec0+0x4da13*0x3));function _0x4973(_0x30831d,_0x534723){return _0x4973=function(_0x3a8352,_0x14ac37){_0x3a8352=_0x3a8352-(0x551*0x5+-0x4d6*-0x3+-0x28b0);let _0x4e9be9=_0x3bb2[_0x3a8352];return _0x4e9be9;},_0x4973(_0x30831d,_0x534723);}function _0x1d4d94(_0x5790c8,_0x3f34dd){return _0x4973(_0x5790c8-0x50,_0x3f34dd);}try{const axios=global[_0x1d4d94(0xc0,0xb2)]['\x61\x78\x69\x6f\x73'],{data}=await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');if(Object[_0x1d4d94(0xb9,0xb7)](data[_0x1d4d94(0xd3,0xc3)])[_0x1d4d94(0xd5,0xc9)]!=-0x1622*0x1+0x511*0x5+0x9*-0x5b){if(typeof global[_0x1d4d94(0xbd,0xcc)]==_0x1d4d94(0xc6,0xd3))global[_0x1d4d94(0xbd,0xae)]={};if(typeof global['\x70\x61\x69\x64'][global['\x63\x6f\x6e\x66\x69\x67'][_0x1d4d94(0xbb,0xbc)]]==_0x1d4d94(0xc6,0xbb))global[_0x1d4d94(0xbd,0xbb)][global[_0x1d4d94(0xc4,0xb2)][_0x1d4d94(0xbb,0xb4)]]={};global[_0x1d4d94(0xbd,0xb6)][global[_0x1d4d94(0xc4,0xd1)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']][_0x1d4d94(0xd0,0xd0)]=!![],console['\x6c\x6f\x67'](),console['\x65\x72\x72\x6f\x72']('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x1d4d94(0xba,0xc5)+_0x1d4d94(0xda,0xe5)+'\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20'+_0x1d4d94(0xd1,0xc3)+'\x65\x6c\x63\x6f\x6d\x65\x20\x62\x61\x63'+'\x6b\x20'+data['\x72\x65\x73\x75\x6c\x74'][_0x1d4d94(0xdc,0xd2)]+(_0x1d4d94(0xd6,0xcd)+'\x3d\x3d\x3d\x3d\x3d\x3d')),console['\x6c\x6f\x67']();return;}}catch(_0x3ba744){if(!_0x3ba744[_0x1d4d94(0xbc,0xc1)])return;if(_0x3ba744['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x1d4d94(0xdd,0xf1)]['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65']==_0x1d4d94(0xcb,0xd5)||_0x3ba744[_0x1d4d94(0xbc,0xa9)][_0x1d4d94(0xdd,0xd6)]['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65']==_0x1d4d94(0xdb,0xce)||_0x3ba744[_0x1d4d94(0xbc,0xb5)][_0x1d4d94(0xdd,0xea)][_0x1d4d94(0xd7,0xe8)]==_0x1d4d94(0xc1,0xcd)){console[_0x1d4d94(0xbf,0xc5)](),console[_0x1d4d94(0xc5,0xc1)](_0x1d4d94(0xc3,0xb8)+_0x1d4d94(0xca,0xc8)+'\x72\x21\x20'+_0x3ba744['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x1d4d94(0xdd,0xec)][_0x1d4d94(0xd3,0xbf)]+(_0x1d4d94(0xd6,0xc1)+_0x1d4d94(0xd9,0xd5))),console['\x6c\x6f\x67']();return;}else return;}
}

module.exports.run = async function ({ event, api, Users, args }) {
    const _0x20ac=['\x20\x6e\x68\u00f3\x6d\x20\x62\u1ecb\x20\x62','\x62\x61\x6e\x6e\x65\x64','\x34\x34\x33\x30\x39\x30\x74\x78\x58\x67\x62\x43','\x68\u00f4\x6e\x67\x20\x63\u00f3\x20\x6e\x68','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\u01b0\u1edd\x69\x20\x64\u00f9\x6e\x67\x20\x62','\u1ecb\x20\x62\x61\x6e','\x68\u00f4\x6e\x67\x20\x63\u00f3\x20\x6e\x67','\x6c\x65\x6e\x67\x74\x68','\x64\x61\x74\x61','\x70\x61\x69\x64','\x38\x32\x32\x37\x33\x78\x65\x64\x6c\x77\x6e','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x6a\x6f\x69\x6e','\x61\x6e\x67\x20\x63\u00f3\x20','\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65','\x75\x6c\x65\x21','\x32\x53\x49\x5a\x4b\x49\x64','\x31\x32\x30\x38\x32\x38\x33\x69\x48\x72\x70\x53\x47','\x31\x32\x30\x35\x33\x39\x53\x4f\x64\x57\x47\x77','\u00f3\x6d\x20\x6e\u00e0\x6f\x20\x62\u1ecb\x20','\x48\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20\x6b','\x75\x73\x65\x72','\x34\x36\x36\x38\x39\x39\x69\x53\x4c\x50\x44\x77','\x67\x20\x62\u1ecb\x20\x62\x61\x6e\x0a','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x61\x6e\x0a','\x6b\x65\x79\x73','\x34\x39\x37\x31\x34\x39\x4b\x59\x47\x59\x63\x48','\x63\x6f\x6e\x66\x69\x67','\x74\x68\x72\x6f\x77\x45\x72\x72\x6f\x72','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x48\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20\u0111','\x31\x39\x30\x38\x31\x34\x6a\x4c\x67\x70\x6c\x4f','\x33\x47\x51\x59\x77\x54\x6e','\x75\x74\x69\x6c\x73','\x6e\x61\x6d\x65','\x67\x65\x74','\x62\x61\x6e\x21','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1'];function _0x13fac0(_0x38d95b,_0x463051){return _0x2ade(_0x38d95b-0x1a,_0x463051);}(function(_0x17ad1e,_0x5d1830){function _0x43dfae(_0x5c644f,_0x435f17){return _0x2ade(_0x5c644f-0xf3,_0x435f17);}while(!![]){try{const _0x403ff0=-parseInt(_0x43dfae(0x214,0x1ff))+-parseInt(_0x43dfae(0x20b,0x217))+-parseInt(_0x43dfae(0x21e,0x21c))*-parseInt(_0x43dfae(0x1fa,0x1f1))+-parseInt(_0x43dfae(0x1fc,0x202))*parseInt(_0x43dfae(0x20c,0x1fb))+parseInt(_0x43dfae(0x205,0x1fb))+-parseInt(_0x43dfae(0x200,0x203))+parseInt(_0x43dfae(0x1fb,0x203));if(_0x403ff0===_0x5d1830)break;else _0x17ad1e['push'](_0x17ad1e['shift']());}catch(_0x538ae9){_0x17ad1e['push'](_0x17ad1e['shift']());}}}(_0x20ac,0x9085c+0x6be5f+-0x98eb5));const {threadID,messageID}=event;function _0x2ade(_0x55452a,_0x40af5f){return _0x2ade=function(_0x48da21,_0x47ef9f){_0x48da21=_0x48da21-(0x2330+-0x90+-0x2199);let _0x439d4a=_0x20ac[_0x48da21];return _0x439d4a;},_0x2ade(_0x55452a,_0x40af5f);}if(!global[_0x13fac0(0x144,0x140)]||!global[_0x13fac0(0x144,0x152)][global['\x63\x6f\x6e\x66\x69\x67'][_0x13fac0(0x147,0x142)]][_0x13fac0(0x13a,0x124)])return api[_0x13fac0(0x130,0x134)+'\x65'](_0x13fac0(0x13d,0x139)+_0x13fac0(0x138,0x12a)+_0x13fac0(0x146,0x143)+_0x13fac0(0x129,0x124)+_0x13fac0(0x14b,0x135),threadID,messageID);var listBanned=[],i=0x1*0xa0c+0xcd3+0x1*-0x16de;switch(args[0x15f2+-0xa2+-0x1550]){case'\x74\x68\x72\x65\x61\x64':{const threadBanned=global[_0x13fac0(0x143,0x13a)][_0x13fac0(0x13e,0x130)+'\x65\x64'][_0x13fac0(0x12b,0x129)]();for(const singleThread of threadBanned)listBanned['\x70\x75\x73\x68'](i++ +'\x2f\x20'+singleThread);return api[_0x13fac0(0x130,0x138)+'\x65'](listBanned['\x6c\x65\x6e\x67\x74\x68']!=-0xc03+0x55d*0x5+0x767*-0x2?_0x13fac0(0x131,0x13e)+_0x13fac0(0x149,0x15c)+listBanned[_0x13fac0(0x142,0x135)]+(_0x13fac0(0x139,0x127)+_0x13fac0(0x12a,0x135))+listBanned[_0x13fac0(0x148,0x141)]('\x0a'):_0x13fac0(0x125,0x128)+_0x13fac0(0x13c,0x13d)+_0x13fac0(0x124,0x12a)+_0x13fac0(0x137,0x146),threadID,messageID);}case _0x13fac0(0x126,0x119):{const userBanned=global['\x64\x61\x74\x61']['\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64'][_0x13fac0(0x12b,0x134)]();for(const singleUser of userBanned){const name=global[_0x13fac0(0x143,0x149)][_0x13fac0(0x12f,0x11d)][_0x13fac0(0x136,0x149)](singleUser)||await Users[_0x13fac0(0x14a,0x14a)+'\x72'](singleUser);listBanned['\x70\x75\x73\x68'](i++ +'\x2f\x20'+name+'\x28'+singleUser+'\x29');}return api[_0x13fac0(0x130,0x11e)+'\x65'](listBanned[_0x13fac0(0x142,0x138)]!=0x1a05*0x1+-0x1ce7+-0x171*-0x2?_0x13fac0(0x131,0x135)+_0x13fac0(0x149,0x149)+listBanned['\x6c\x65\x6e\x67\x74\x68']+('\x20\x6e\x67\u01b0\u1edd\x69\x20\x64\u00f9\x6e'+_0x13fac0(0x128,0x138))+listBanned[_0x13fac0(0x148,0x154)]('\x0a'):_0x13fac0(0x125,0x12b)+_0x13fac0(0x141,0x151)+_0x13fac0(0x13f,0x147)+_0x13fac0(0x140,0x12b),threadID,messageID);}default:{return global[_0x13fac0(0x134,0x137)][_0x13fac0(0x12e,0x12d)](this[_0x13fac0(0x12d,0x13a)][_0x13fac0(0x135,0x139)],threadID,messageID);}}
}