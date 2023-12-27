document.addEventListener('DOMContentLoaded', function () {
    const unicodeInput = document.getElementById('unicodeInput');
    const convertButton = document.getElementById('convertButton');
    const krutiDevOutput = document.getElementById('krutiDevOutput');
    const autoCheckbox = document.getElementById('autoCheckbox');
    const sampleButton = document.getElementById('sampleButton');
    const resetButton = document.getElementById('resetButton');
    const copyButton = document.getElementById('copyButton');
  
    convertButton.addEventListener('click', function () {
      const unicodeText = unicodeInput.value;
      const krutiDevText = convertToKrutiDev(unicodeText);
      krutiDevOutput.value = krutiDevText;
    });
  
    autoCheckbox.addEventListener('change', function () {
      if (autoCheckbox.checked) {
        unicodeInput.addEventListener('input', function () {
          const unicodeText = unicodeInput.value;
          const krutiDevText = convertToKrutiDev(unicodeText);
          krutiDevOutput.value = krutiDevText;
        });
      } else {
        unicodeInput.removeEventListener('input', null);
      }
    });
  
    sampleButton.addEventListener('click', function () {
      unicodeInput.value = 'नमस्ते, यह एक यूनिकोड सैम्पल टेक्स्ट है।'; 
      const krutiDevText = convertToKrutiDev(unicodeInput.value);
      krutiDevOutput.value = krutiDevText;
    });
  
    resetButton.addEventListener('click', function () {
      unicodeInput.value = '';
      krutiDevOutput.value = '';
      autoCheckbox.checked = false;
    });
  
    copyButton.addEventListener('click', function () {
      krutiDevOutput.select();
      document.execCommand('copy');
    });
  
    function convertToKrutiDev(unicodeText) {
       var _0xee53=["\x76\x61\x6C\x75\x65","\x65\x6E\x67\x6C\x69\x73\x68\x5F\x74\x65\x78\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x69\x6E\x64\x69\x5F\x74\x65\x78\x74","","\x73\x65\x6C\x65\x63\x74","\x63\x6F\x70\x79","\x65\x78\x65\x63\x43\x6F\x6D\x6D\x61\x6E\x64","\u093E\u093F\u0940\u0941\u0942\u0943\u0947\u0948\u094B\u094C\u0902\x3A\u0901\u0945","\u2018","\u2019","\u201C","\u201D","\x28","\x29","\x7B","\x7D","\x3D","\u0964","\x3F","\x2D","\xB5","\u0970","\x2C","\x2E","\u094D\x20","\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F","\x78","\u095E\u094D","\u0958","\u0959","\u095A","\u091C\u093C\u094D","\u095B","\u095C","\u095D","\u095E","\u095F","\u0931","\u0929","\u0924\u094D\u0924\u094D","\u0924\u094D\u0924","\u0915\u094D\u0924","\u0926\u0943","\u0915\u0943","\u0939\u094D\u0928","\u0939\u094D\u092F","\u0939\u0943","\u0939\u094D\u092E","\u0939\u094D\u0930","\u0939\u094D","\u0926\u094D\u0926","\u0915\u094D\u0937\u094D","\u0915\u094D\u0937","\u0924\u094D\u0930\u094D","\u0924\u094D\u0930","\u091C\u094D\u091E","\u091B\u094D\u092F","\u091F\u094D\u092F","\u0920\u094D\u092F","\u0921\u094D\u092F","\u0922\u094D\u092F","\u0926\u094D\u092F","\u0926\u094D\u0935","\u0936\u094D\u0930","\u091F\u094D\u0930","\u0921\u094D\u0930","\u0922\u094D\u0930","\u091B\u094D\u0930","\u0915\u094D\u0930","\u092B\u094D\u0930","\u0926\u094D\u0930","\u092A\u094D\u0930","\u0917\u094D\u0930","\u0930\u0941","\u0930\u0942","\u094D\u0930","\u0913","\u0914","\u0906","\u0905","\u0908","\u0907","\u0909","\u090A","\u0910","\u090F","\u090B","\u0915\u094D","\u0915","\u0915\u094D\u0915","\u0916\u094D","\u0916","\u0917\u094D","\u0917","\u0918\u094D","\u0918","\u0919","\u091A\u0948","\u091A\u094D","\u091A","\u091B","\u091C\u094D","\u091C","\u091D\u094D","\u091D","\u091E","\u091F\u094D\u091F","\u091F\u094D\u0920","\u091F","\u0920","\u0921\u094D\u0921","\u0921\u094D\u0922","\u0921","\u0922","\u0923\u094D","\u0923","\u0924\u094D","\u0924","\u0925\u094D","\u0925","\u0926\u094D\u0927","\u0926","\u0927\u094D","\u0927","\u0928\u094D","\u0928","\u092A\u094D","\u092A","\u092B\u094D","\u092B","\u092C\u094D","\u092C","\u092D\u094D","\u092D","\u092E\u094D","\u092E","\u092F\u094D","\u092F","\u0930","\u0932\u094D","\u0932","\u0933","\u0935\u094D","\u0935","\u0936\u094D","\u0936","\u0937\u094D","\u0937","\u0938\u094D","\u0938","\u0939","\u0911","\u0949","\u094B","\u094C","\u093E","\u0940","\u0941","\u0942","\u0943","\u0947","\u0948","\u0902","\u0901","\u0903","\u0945","\u093D","\u094D","\x5E","\x2A","\xDE","\xDF","\xBC","\xBD","\xBF","\xC0","\xBE","\x41","\x5C","\x26","\u0152","\x5D","\x7E\x20","\xE5","\u0192","\u201E","\u2026","\u2020","\u2021","\u02C6","\u2030","\u0160","\u2039","\xDB","\xB6","\x64","\x5B\x6B","\x54","\x74","\x4D\x2B","\x3C\x2B","\x51","\x3B","\x6A","\x75","\xD9","\xD9\x6B","\xE4","\u2013","\u2014","\xE0","\xE1","\xE2","\xE3","\xBA\x7A","\xBA","\xED","\x7B\x6B","\xAB","\x4B","\x4E\xEE","\x56\xEE","\x42\xEE","\x4D\xEE","\x3C\xEE","\x7C","\x4A","\x56\xAA","\x4D\xAA","\x3C\xAA\xAA","\x4E\xAA","\xD8","\xDD","\xE6","\xE7","\x78\x7A","\x23","\x3A","\x7A","\x76\x6B\x73","\x76\x6B\x53","\x76\x6B","\x76","\x62\x5A","\x62","\x6D","\xC5","\x2C\x73","\x5F","\x44","\xF4","\x5B","\x58","\x3F\x6B","\xB3","\x70\x6B\x53","\x50","\x70","\x4E","\xF7","\x3E","\xA5","\xEA","\xEB","\x56","\x42","\xEC","\xEF","\x4D","\x3C","\x2E\x6B","\x52","\x72","\x46","\x46\x6B","\x6E","\x2F","\x2F\x6B","\x55","\x49","\x69","\x43","\x63","\x48","\x48\x6B","\x45","\x65","\xB8","\x59","\x79","\x47","\x4F","\x6F","\x27","\x27\x6B","\x22","\x22\x6B","\x4C","\x6C","\x67","\x76\u201A","\u201A","\x6B\x73","\x6B\x53","\x6B","\x68","\x71","\x77","\x60","\x73","\x53","\x61","\xA1","\x25","\x57","\xB7","\x7E","\u093F","\x69\x6E\x64\x65\x78\x4F\x66","\x63\x68\x61\x72\x41\x74","\x66","\x72\x65\x70\x6C\x61\x63\x65","\x73\x65\x61\x72\x63\x68","\x20\x20","\u0930\u094D","\x73\x75\x62\x73\x74\x72","\x5A","\x6C\x65\x6E\x67\x74\x68"];function toKurtidev(){document[_0xee53[2]](_0xee53[1])[_0xee53[0]]= uniToKrutidev(document[_0xee53[2]](_0xee53[3])[_0xee53[0]])}function clear_data(){document[_0xee53[2]](_0xee53[3])[_0xee53[0]]= _0xee53[4]}function copy_data(){document[_0xee53[2]](_0xee53[1])[_0xee53[5]]();document[_0xee53[7]](_0xee53[6])}function uniToKrutidev(_0x602bx5){mtrLs= _0xee53[8];var _0x602bx6= new Array(_0xee53[9],_0xee53[10],_0xee53[11],_0xee53[12],_0xee53[13],_0xee53[14],_0xee53[15],_0xee53[16],_0xee53[17],_0xee53[18],_0xee53[19],_0xee53[20],_0xee53[21],_0xee53[22],_0xee53[23],_0xee53[24],_0xee53[25],_0xee53[26],_0xee53[27],_0xee53[28],_0xee53[29],_0xee53[30],_0xee53[31],_0xee53[32],_0xee53[33],_0xee53[34],_0xee53[35],_0xee53[36],_0xee53[37],_0xee53[38],_0xee53[39],_0xee53[40],_0xee53[41],_0xee53[42],_0xee53[43],_0xee53[44],_0xee53[45],_0xee53[46],_0xee53[47],_0xee53[48],_0xee53[49],_0xee53[50],_0xee53[51],_0xee53[52],_0xee53[53],_0xee53[54],_0xee53[55],_0xee53[56],_0xee53[57],_0xee53[58],_0xee53[59],_0xee53[60],_0xee53[61],_0xee53[62],_0xee53[63],_0xee53[64],_0xee53[65],_0xee53[66],_0xee53[67],_0xee53[68],_0xee53[69],_0xee53[70],_0xee53[71],_0xee53[72],_0xee53[73],_0xee53[74],_0xee53[75],_0xee53[76],_0xee53[77],_0xee53[78],_0xee53[79],_0xee53[80],_0xee53[81],_0xee53[82],_0xee53[83],_0xee53[84],_0xee53[85],_0xee53[86],_0xee53[87],_0xee53[88],_0xee53[89],_0xee53[90],_0xee53[91],_0xee53[92],_0xee53[93],_0xee53[94],_0xee53[95],_0xee53[96],_0xee53[97],_0xee53[98],_0xee53[99],_0xee53[100],_0xee53[101],_0xee53[102],_0xee53[103],_0xee53[104],_0xee53[105],_0xee53[106],_0xee53[107],_0xee53[108],_0xee53[109],_0xee53[110],_0xee53[111],_0xee53[112],_0xee53[113],_0xee53[114],_0xee53[115],_0xee53[116],_0xee53[117],_0xee53[118],_0xee53[119],_0xee53[120],_0xee53[121],_0xee53[122],_0xee53[123],_0xee53[124],_0xee53[125],_0xee53[126],_0xee53[127],_0xee53[128],_0xee53[129],_0xee53[130],_0xee53[131],_0xee53[132],_0xee53[133],_0xee53[134],_0xee53[135],_0xee53[136],_0xee53[137],_0xee53[138],_0xee53[139],_0xee53[140],_0xee53[141],_0xee53[142],_0xee53[143],_0xee53[144],_0xee53[145],_0xee53[146],_0xee53[147],_0xee53[148],_0xee53[149],_0xee53[150],_0xee53[151],_0xee53[152],_0xee53[153],_0xee53[154],_0xee53[155],_0xee53[156],_0xee53[157],_0xee53[158],_0xee53[159],_0xee53[160],_0xee53[161],_0xee53[162],_0xee53[163],_0xee53[164],_0xee53[165],_0xee53[166],_0xee53[167],_0xee53[168],_0xee53[169],_0xee53[170],_0xee53[171],_0xee53[172],_0xee53[173],_0xee53[174],_0xee53[175],_0xee53[176],_0xee53[25],_0xee53[177]);var _0x602bx7= new Array(_0xee53[178],_0xee53[179],_0xee53[180],_0xee53[181],_0xee53[182],_0xee53[183],_0xee53[184],_0xee53[185],_0xee53[186],_0xee53[187],_0xee53[188],_0xee53[189],_0xee53[189],_0xee53[190],_0xee53[191],_0xee53[20],_0xee53[192],_0xee53[193],_0xee53[194],_0xee53[195],_0xee53[196],_0xee53[197],_0xee53[198],_0xee53[199],_0xee53[200],_0xee53[201],_0xee53[202],_0xee53[203],_0xee53[204],_0xee53[205],_0xee53[206],_0xee53[36],_0xee53[207],_0xee53[208],_0xee53[209],_0xee53[210],_0xee53[211],_0xee53[212],_0xee53[213],_0xee53[214],_0xee53[215],_0xee53[216],_0xee53[217],_0xee53[218],_0xee53[219],_0xee53[220],_0xee53[221],_0xee53[222],_0xee53[223],_0xee53[224],_0xee53[225],_0xee53[226],_0xee53[15],_0xee53[227],_0xee53[228],_0xee53[17],_0xee53[229],_0xee53[230],_0xee53[231],_0xee53[232],_0xee53[233],_0xee53[234],_0xee53[235],_0xee53[16],_0xee53[236],_0xee53[237],_0xee53[238],_0xee53[239],_0xee53[240],_0xee53[241],_0xee53[242],_0xee53[243],_0xee53[244],_0xee53[245],_0xee53[246],_0xee53[247],_0xee53[248],_0xee53[249],_0xee53[250],_0xee53[251],_0xee53[252],_0xee53[253],_0xee53[254],_0xee53[255],_0xee53[256],_0xee53[257],_0xee53[23],_0xee53[258],_0xee53[259],_0xee53[205],_0xee53[260],_0xee53[261],_0xee53[206],_0xee53[262],_0xee53[36],_0xee53[19],_0xee53[263],_0xee53[264],_0xee53[265],_0xee53[266],_0xee53[267],_0xee53[268],_0xee53[207],_0xee53[208],_0xee53[269],_0xee53[270],_0xee53[271],_0xee53[272],_0xee53[273],_0xee53[274],_0xee53[275],_0xee53[276],_0xee53[277],_0xee53[278],_0xee53[279],_0xee53[24],_0xee53[280],_0xee53[281],_0xee53[282],_0xee53[283],_0xee53[284],_0xee53[14],_0xee53[285],_0xee53[286],_0xee53[287],_0xee53[288],_0xee53[214],_0xee53[289],_0xee53[290],_0xee53[204],_0xee53[211],_0xee53[291],_0xee53[292],_0xee53[293],_0xee53[294],_0xee53[295],_0xee53[296],_0xee53[297],_0xee53[212],_0xee53[213],_0xee53[298],_0xee53[299],_0xee53[300],_0xee53[301],_0xee53[302],_0xee53[303],_0xee53[304],_0xee53[305],_0xee53[306],_0xee53[307],_0xee53[308],_0xee53[309],_0xee53[310],_0xee53[311],_0xee53[312],_0xee53[313],_0xee53[314],_0xee53[315],_0xee53[316],_0xee53[317],_0xee53[318],_0xee53[319],_0xee53[320],_0xee53[321],_0xee53[322],_0xee53[323],_0xee53[324],_0xee53[325],_0xee53[192],_0xee53[326]);var _0x602bx8=_0x602bx5[_0xee53[328]](_0xee53[327]);while(_0x602bx8!=  -1){var _0x602bx9=_0x602bx5[_0xee53[329]](_0x602bx8- 1);_0x602bx5= _0x602bx5[_0xee53[331]](_0x602bx9+ _0xee53[327],_0xee53[330]+ _0x602bx9);_0x602bx8= _0x602bx8- 1;while((_0x602bx5[_0xee53[329]](_0x602bx8- 1)== _0xee53[177])& (_0x602bx8!= 0)){var _0x602bxa=_0x602bx5[_0xee53[329]](_0x602bx8- 2)+ _0xee53[177];_0x602bx5= _0x602bx5[_0xee53[331]](_0x602bxa+ _0xee53[330],_0xee53[330]+ _0x602bxa);_0x602bx8= _0x602bx8- 2};_0x602bx8= _0x602bx5[_0xee53[332]](/à¤¿/)};_0x602bx5+= _0xee53[333];var _0x602bxb=_0x602bx5[_0xee53[328]](_0xee53[334]);while(_0x602bxb> 0){var _0x602bxc=_0x602bxb+ 2;var _0x602bxd=_0x602bx5[_0xee53[329]](_0x602bxc+ 1);while(mtrLs[_0xee53[328]](_0x602bxd)!=  -1){_0x602bxc= _0x602bxc+ 1;_0x602bxd= _0x602bx5[_0xee53[329]](_0x602bxc+ 1)};_0x602bxa= _0x602bx5[_0xee53[335]](_0x602bxb+ 2,(_0x602bxc- _0x602bxb- 1));_0x602bx5= _0x602bx5[_0xee53[331]](_0xee53[334]+ _0x602bxa,_0x602bxa+ _0xee53[336]);_0x602bxb= _0x602bx5[_0xee53[328]](_0xee53[334])};_0x602bx5= _0x602bx5[_0xee53[335]](0,_0x602bx5[_0xee53[337]]- 2);for(i= 0;i< _0x602bx6[_0xee53[337]];i++){while(_0x602bx5[_0xee53[328]](_0x602bx6[i])!=  -1){_0x602bx5= _0x602bx5[_0xee53[331]](_0x602bx6[i],_0x602bx7[i])}};return _0x602bx5}
        var krutiDevText = uniToKrutidev(unicodeText);
        return krutiDevText;
      }
      
  });
  