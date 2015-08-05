/*---------------copyright by Neil, You, Shanghai Jiaotong University 2015, 7 ------------------*/
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-=";
var raw_stab = "7Zf7b1NlGMf3h-iz-4CJ8RITYiKaqBFCRASDQvQHEOUnjURjuAQCY1vXe3varVs3cCjRYIhGEGVj1Lm1Pfdzer+vPe3p1t26S5F9fc4BISYEN9zwF9M8ed9e0s-7PM-3eZ73tAFo+98eyZBMxMAL7H-IFxAOhx47t9lcwZWfRqCqY5DlCVy9EsLyUuuxnoFn48QP0RrC9WuPNQfI5SuoahoSCRaKOIGEnEJMyW86d3V1FcvLy5BiOYiCCFlUIAssxEgE4zdl+m7F+M2m8efmV-DrqAQlnkRMjUPkU1AFGTExDImTcPlSCI1Gc1NjUCg0IIlxcKwESRLASyJYiUNEGMNv4U3VARrTC6jXdagK8aMKRIkHZ5gsgaU6YKUo4vEs5WDj2bdvg2KeQLWWh6LI5D-FXxQpBqQDWYYSY3FjdBhez7lN8V0gvYnSGPSpDNVdDAKXoveCyZfoHLLCgmXH0dlhx9D5SxvOr1Y1VLQktBppTklC5NLE54jPkw6Jb+6jONveDrejd+Nqjl7XR8aImcZCs476VBlxtUh9JwtRDhM3CoVTqAaIz-0On9uKwT4fJkuFDTtDPFVAsaiR9jTKv0Y6yEDgKf9SxPRb5iWolAcuOoFzg-04feo4fB7nhrDZqIpCsYTpRp1yUEWtRvqPyaQHztSEJBl7QwcSolEWA4OD6OjsgsPhQr5Q+hd6X8X09AxiVE+TlTzquk7smmmqqprMv7j3+VEMDAzA5XLh2LHjCPQFH5m-0lrFz1d5FMt5NOZL0LTqP-JZlkUwGITD7kBXVyc8XhtujIyj1bq9bv6tP1aJ1URtqoRyLU3zprYmfn9-PyyWbni9bpxpP4ozp62PVu9yBukcxX26jLJWNPO+Hr6bcuC0dcDa7aC8qOtiLy4uIirGUNIKVG+G5kl7a4z-Hb7F1EAP48XJE6epJ62rH2BsLITR0DDlvI5adQZ6fZr22tr53eS-2wmP04YeTy++OHICw8M31pb3Vov8LZv9tJinmFfnzNhr1bXzu4nvcjnhslrAOH04+uVJfPfd92vzPRTBtV+uoFjKopAz+LMmc918p5N6oQN+dy862m0YGvqaZmPqYbMRrZUW9c06+R6lmSahXJyDXiP-9crd3vNgvjEHjRnIcdx9-bld8HucxA+A8QRw7MRRML7AQ30fHQljfDyCdFY2-69SahKf-NcnH8o3TFEU8Dx-j2-En3HZ4XX00EwOoMtyBhaqh3gy-YB7HSDRf6pKlnyIguVHaZ9Apbhi+q+b-NrdGtTvzF-qvbzJl01TFBWcyQ8S33qPzzj74XEF4fXZ8Pnxw2ACfQ-0-Ycfh0n3E0imVETYmxRTBeXJGfK9bt45NK1izmDDYqpC84enM-DmHUwSeZpDFA+e+l9-gPjU+9yG7zZ47Axcdh-lwwKH6xSs9k5c-OayMVjv99rlFm4tAOVSBYlkxtRJMpnEVKOKmXmdZo+O2ZlZzM3Okc0ik87QGVSk6B6aSiTM57BMKkkxk3Fh6Cvqvzb4GQa9TA9pwIteL4MA7YN+0mb7Wbjt-r8-SwjkjxCmOaMhW9CRyZdRnKxgfnEJ80sLtDbp7ruEuYVlzNOzT65QRjKdQyZXRDpToJjlkM2XkKD1-NBFWB1uincAPrKe3j74-QGyPtMYJgAP48ZEZOIe-8K3AWx7+2nsPbAT7xzcg32Hd5PtwodH9uPAZ3tx8Mi7OPDJXfv0Pez-eBf2HdpJ61vY9xHZoV14--Aest3Yuv0FvPj6M3hp2-PY+sZzeO3NLXhlu7F-Fi-TZ6-u2IInn3oCez7YYbLR1vYn";
var raw_block = "VZf3U5Rptseb0IQGupumgYZuaJqco3SkSZIUQdHBsOoEZ8YxAJJFgoAECSLI4JjG2RUkIxhmdHR2d1LV1tStulX3h-v7-VM+93Rrbc3+8K3ned9+nhO-55y3ScywU3PMxf7Dpdj2OyivP8D+o0dwN+yn5Eg5pXUVVNbXUtq4H9fh-bgby6lqKBPsp6yhAfdBOd9UT9tAD3UnGrDXOOV+naylVDZV0T3eTcPZBhx1ZdirXZRUuSmrPYOtxo29toRsh4VH33-C6KMyTnRaONOTxuEWE9Vf6Bn6aw3931hpag3lUEeYIJSmLjUTy8V8OhDL0P0mPh3M4dAFA4u7p1n55TLnhnM4eEFLc6+WczdiefJ7M+fG4qi7GMxnw0a+HEqiuSWNMwPRnO7NJtutZvn3A-Q8sNB1z8LHY2GUfK7AfV5B-1oy998dobEtDPeXCmraA6jvCWZs1UVTZzB932VydiyUolMK6tsV3Hlj5+SIEscZBb33i-lq1szEpovGrgDspxVM71RxczOPuhYFXX9TMvQknfxSPbPbJXwxE0-PwyzOz5mo6fCl9WECU69LaF1KpabVn-N3U2hdzuXSw1RGNotp6gui40EaTf0aqtuUNPb5c-amhhOjgRzs9KPzYS7n5+PpX8nj5GgY9d1KBlaKOTtqEnvUDGyrGd1IIq8kntN90ZRd9KX7cS4ju4W0PI5h8FkOfZsFXHqs5sJjJYNv4uh-G0fHMy09O0F0r0VwfVO40+XPp7ci6VtN59I9o-iVyo2XqfRtael8GiQIoHM1mIkf42h-oqWqTeyW2Ey8MjO0kiaccTH6uJQv74Yz9jKH6y-i6NkOp28viitrero3TUz8PZveV-Fc2YumZSeCSysqRn+wiMwc2p7o6XgayeBzEz1bYsdOJLd-KWBwN4Gu9XC5r6F-N4qF34vpf2bi4rf+DG5nMPmjmf7vcmg+nMOd360Mvkqi-4WBrg0tA3tpTLwrpnfHyOVlFSNvkri6k8aN1zb6n2fKOw2dG2qubmkY2DVwbcvI6MsUrm7GSFzC6VjT0Po0XH5PZvyNg97NdDrX4+je1jH0QzR9YsfgGxU9TzI5cTCVxf8q4NrLNC49kdhs6Ln+vJD+nXyRE0P7RqC8C6NrzczNtw7Rl07rSoi8C6ZrM0zkhtMr+ife5NC7YaL9qV7ipqLlaQjdG4mM-WAX-Wm0SOx7dzVM-JQuPsbQtiUcFP6daMxi8Y9irr-OEp-CBXqGJQ89G8m0iy9dwpO2p6J-3cTkuwIGnieL-jA6tkLofCZ2SJ67tqO59lzivW2g3ZN3D9b1XHuWLHckjtuJIksn-ku8nsfJbwY6d33ofpIh+jNZ+FcRM7-ZGXplFF1yZi+dq9tJ7-3eUnv1dW-FMPlTNv17ZtpWNKI3VLgYTIfIbFvX0bFpoOdZDF07st+IEN8NjL3JYuafRRKnGImJWs6E0r4e4fW-a8+HnuUMjov+xT+sTP8qeRLuXFmVvG4neHnXuaXy5vnKarg3Nj3bkbKKH5t6kSl61iQOEqOWv+loXxGf1qLlOUJyEC17yd1qlNgtMVnTen3p2AjxyupYlXM7Cq-+Mw1Z3PpN8r2bL+dDRa5a7holRiJjx0fsljivR4qMUFqWxd9NLW2S9-YNFX1P1QzvxUnNpEpckhl8mcz1l2bad2K4uBElsRM9qxquSL10yJ02D2dWI+kQeW17CtqXUzh2NIvxt0lcErvaxN72dbF5N4KB13p6hC9ta8FcXg2kZT2I1jWl8Er6yI6BqR8zuSr5HXuRx+3vnczt2bntwQsbI+s5DG5mMib5at-V0botXFwPpWddxaXNEJEh8dsOYHi1iP2n5P67XDrfKIWTRq69yuHzhwaaBiW-j-IY+9HCyE-xjP6UydQvSUy-tXBhKoG24UIeLdcx3JnAUHMIc80R3DoexWRzJGOnonkwU8j8Xh4X9sI4t+cnOQnk6koA7W80Uv95zCzHcXvJyfn2o7z8nw4WfpXe-HcD4y8LSC9JRKFQUHfUyOKzCsY3DzG1+xFzrw6x9MMhDA4Vfn4KvqtN5rfzLv7ZnM+vR3P4+UQePzfn8uJMKqu96Tx5nM-kyyRaJQb9-0jkxs9p3PtHFVvvvmBzs4ypwXxsdunT7eWcbrVxqjMSU65CdCtJ0lpIVPqi1fuiMQShjgpEE68k0hyASuNPsMKffQofhutc3D1Vz62mUiaPORg5KTk4YmO0Np2vms181p3C7dcnpddUc-FrJ2cuFPHVxzV0n5Pe2VyAnyKAQPE1VBCsCBbdPoTL-t7lk0wfrMFH4eeNhULOBQiCZB8juuN9tagUgQJfQuSdR4afr5wLUHifPTJ8BUGBvhyss6ILC-wg5-3Z8A+IUulJlzvFojdDEUmaMogUfwVzJwv43+ufYTPFeO-o-KMwBQaTpZKzSh+siiCsyhAKfJRky91MP18y5Z4H8cEBGFWhJAWFkOITQKLczxE-smTNUPrL+XCyfH1IDAjAkVNIb3UB0-vi6a1V0t0USZVBz+3aWv5vpJpis9KrP9I-CKOsH2WEMV0jebVlMOqKpcduotVqosMhPcNuodcqfdART6c9nmv7ErixL5Fxq5nrTguDLgMTjmjGC4sYcSZx3pmGM6uE-jon406p38oYhmuSOBAeRr-dyvdf1ZETG4bCR4E6RIFR1k-SY5g7kMVAaRpdpfnMlCfwdUU0sxVxTFQlezFfHsOSS8ODcuGzQ+a2K5vr7nTG3TH0lyQwbLMzWpbAlYpktAoNZvHLg4QPa+IHePbaDzlTSFzVsub6+JIje7PkukjiP5QTyeMSPbds0YyJrkmniZF9Ydyvi+Xx0QyKAzx2+5Ll70OR3ElSvEeqR5-4k6WOpdaiw5kQhcsciUvWssRoSixR2OW5zmKgPCEaa4qR8vQkMlVhwi8-goULySKjuyCKJXckMw6pfYn7tFV8tunY-sLBwzMOEsRWpZ8fKqklg+z3x+s4YEqiKl6LNSGShhwrtz6yMVmXy8SBfMYFY3V53BCM1RexVJ3FnMR0tDGXqRMVHEk0evmtClUJv2Q2W2NZKo9iVvRPOUzMWWVfoOXFWQePTpR6uazyDyFAeJqlVTB6IJlbjbWMNabRfjiP6rRc7kgfub9PzR2rnsU-wfP8oFDDoj2Um65Q5kqjmShNoTI2iAjpP-HC8Q6bmcXyaGacUcItIzP2CBby1bw9bmP5WJnUlA+RUis5YeG07oviTkUos7YEJktC6KqI4VBKGgs1cczZNRLDiP-ArF3HtN3IuCuGsRIdMzYtS5WpDJSlk6L0w+wn86rYzB3Rf9MVzQ05d9Mp3xi2UJ59bOXhCac3R8kB8l0jXL1b6+FlINP5ZiZdMtsrTRxOTuJWbTwj4tuI2-CfkHejLplp0o9HyoTjdj0LzgT5LYOsICUmP5nP+yzik9SVO8J7ftyt44bEa+2zYhb-4iLew2VVINcqxc-SYMlRCLPFFqaEMx3l6dSlpTIn+m-b9F4O-RnTUqt3ivXM28KZc4Rxr1jNPaeZAUcKicE+6MSGy0Upck5mjsOPUWcIozYDC9khvJOZ8O3JCkyiPzYwkO6yFGbdGrExgjs2NV9bI+hxFHIwVd7XJnLTHic9IP49HO8x5uGzvL-plG8fV5TYaGC+JIP20jzigqUGg-0YKMlmqSSWxTK1+KfjriuBbwq1vD6ezaPjTuI8dRag5Jo7joUSNUPuJMl-nMTSSIvkpD5Fvj+k50w7RIfTKDVkFH2mf2NanidF-4RL-qfYIpl3pdNTWUSC6E8Ubi9-0sgfbUf45XKVoIb-Pn+M3z6v4V-dDaycq-L2FIu-L0PCjSWnfEu7jVIjBuZsJi6XyvxPKmRW9C9ahd9St3PCuXnh3r8heZl1hjMr-F+0enpaIpcLYknw8-ilYLC8mAeH3cxIvU7XFHK3ws58jZX5JrvkPOt9-oP8vX1vwRXMdLmS+3YV31g9vVv+i+bYmT1WID0kltvlZi8WKi1-QjIzVRbJUTz3a5Lpz46kSPyOCfTBGKr0zgRPjHUCjSBaYPwAg2duyJxJ1sk3elUR8wfimDoQwX3h67dlGVJHVViMJo5k6DgWpeZIjOY9YrUfIHujjnpzuEDDKYueIh+ZzzLTQsJ1aEI06H0D0Upv8QmUORUaiK9wLcQnkAiZ0RFKJTp1OLqQCKpNEfzFHEa1yDoeHcaZaPkvZo76f476";
var raw_player = "jZVZTJRXFMc-Zx9mcViEgRlnicyIUpCGALWIC7jw0BqDQQVFBURqy5JgKwoVKLVqgxCMS0VqLS-UBWxVaGuqYxptY1MLbn1o2oemiU37ZCPEMmy-XgYyVQHh4Z-vnnv+53-vPd+550qA9ByInTcPSZLQKdTolQqMCjmBciUhcjUzpBlYzBH09Q9IE8ROBgYFXomOIkYtsdwZxiqnkZWOANLtJtbOd7JijgOtQkF8YiI9vb3T0vQODrF4yVISQhXkuNVsiwlim0vHG9EGcoW9xaUlP9pCeuRs33li4xYwNA3df-sHfPykWUoedtbxz80m-u5o4NHNFn5pO0BOpJoNEUoKXrKwQC9Dr9GKvQxPqTs0PIxeZ8RqUPHwh1aqtq-l3qWjFG9eT1-XF2Ktg2TF6MmxatjoCkWSyVmcupLhoaEptbu777E0JZGvmypYFu3gclMxsXYzPZ7j8Ecr6+abyAySfDmK1UoYlCr6+vqnleeVy1K421LBk+6L8NvH9N44Br93wl9XuH+yhjyXiawoE2kmGTZzKN6BKWuDR4+fkJq2kPtttVTt2EZGWjIlGemsWrSITauT8d47RemSlzGrVVjDjFz78ftp19q6ten86Wnw-cOncfbDQpGLi7gdFp9dEZMwqUZubi5bt24hPz+fgu2FZOfkYg6dRd7ryXR9eYzbVw7huVDFz1frYOAGe3My-OtkGgO4XV46oe7ze3oae0syadidTXFWKmWb0ti42u2b15g3ojVnirGGOGFfr3xnnO7ZM2c4f76N1tZWwkKCJ9CP5nRtHidr3xRjq4CKMFMhbtvnaIMLxL2WqBf4rrp60pwkJyXSeqSKU-tKxjRNzJ57hNMN1zja0InD1oHWtAat8GlnxiNpKgWniHRJywkx923d-nGaj3t6kUlKjr1bIKxfufFZJSFGJzr9yP87IfABRls7EVGXkIwphAYFcfnTqxzcfd63h1MCzQLfNNaP066rP+zjZC+3s78sE2uwTZwzAZUmVfSa5ciUy1CoM5Bp1xBosPJTS5GI8tC0bwcbAnScFrFHBG7WNY7Tbmw8zua8t1i3PhtT2Ex0Thsm+xwCzW6C7PMxO8IJFr1OLR-Nf0t9hYh6QLzbxh5hfyWwa8TxgjoecatCFhC5qY652Y1EZtcQnLBK9GIFr2oMBEoyH6emLJ+4cDMHxPxhYRdOoftJczM6ca8kyYAkjxTf0XpxyXW8ppxFplqPdaxuggW2Cpwr3MGFPRUT6nk81znX1satW7eIcrt4r3oXb5cVsXNnKc2Nh1gYasKlkuMU+0uabaHjo6N0lpfTse-9CfWGRZ9sb29-pn5nGg10d3X5OV137mA0Gv3+8AgLdx-cf+G5+7xeP18loBgbqxVKP0epUo2+feKd04z5R+7GwOQ9DW9-P5bwcB9XO+P-OKfN7uc4HA7fXMDIemN+a0QEA4ODz2gJx38J";
var mainCanvas;
var blackCurtain;
var INT_MAX = 2147483647;
var player;
var bmd_player = {};
var bmd_stab_up = {};
var bmd_stab_down = {};
var bmd_stab_left = {};
var bmd_stab_right = {};
var bmd_block = {};
var bmd_block_solid = {};
var map_array = [];
var blocks = [];
var stab = {};
var drag_models = [];
var g = {};
var mask = {};

var width = Player.width;
var height = Player.height;
var XSIZE = 22;
var YSIZE = 15;

var MAP_TO_LOAD = "";
var GRAVITY_ORIGIN = 1.96;
var GRAVITY_FLOAT = 0.62;
var GRAVITY = GRAVITY_ORIGIN;
var JUMP_SPEED = -10;
var MAX_JUMP_POWER = 2;

var TYPE_EMPTY = 0;
var TYPE_BLOCK = 1;
var TYPE_BLOCK_SOLID = 2;
var TYPE_STAB_UP = 3;
var TYPE_STAB_DOWN = 4;
var TYPE_STAB_LEFT = 5;
var TYPE_STAB_RIGHT = 6;
var TYPE_PLAYER = 7;

var tl = {};
tl.x = width / 2 - XSIZE * 16;
tl.y = height / 2 - YSIZE * 16;
var br = {};
br.x = width / 2 + XSIZE * 16;
br.y = height / 2 + YSIZE * 16;

var player_bytes = "";

function fillRect(g, x, y, width, height, color) {
    g.graphics.beginFill(color);
    g.graphics.drawRect(x, y, width, height);
    g.graphics.endFill();
}


function drawBound(x, y) {

    g.x = tl.x + 32 * x;
    g.y = tl.y + 32 * y;
}

function trimX(x) {
    if (Math.floor((x - tl.x) / 32) < 0) {
        return 0;
    } else {
        return Math.floor((x - tl.x) / 32);
    }
}

function trimY(y) {
    if (Math.floor((y - tl.y) / 32) < 0) {
        return 0;
    } else {
        return Math.floor((y - tl.y) / 32);
    }
}

function saveMap(map) {
    var arr = [];
    var str = {};
    str = "";
    for (var i = 0; i < XSIZE; i++) {
        for (var j = 0; j < YSIZE; j++) {
            arr.push(map[i][j].type);
        }
    }
    for (var i = 0; i < arr.length; i += 2) {
        var index = arr[i] * 8 + arr[i+1];
        str = str + BASE64_CHARS.charAt(index);
    }
    trace(str);
    return str;
}

function loadMap(str) {
    for (var i = 0; i < XSIZE; i++) {
        for (var j = 0; j < YSIZE; j++) {
            var origin = str.charAt(Math.floor((i*YSIZE+j)/2));
            var ch = BASE64_CHARS.indexOf(origin);
            var t;
            if ((i*YSIZE+j) % 2 == 0) {
                t = Math.floor(ch / 8);
            } else {
                t = ch % 8;
            }
            placeObj(blocks, i, j, t);
        }
    }
}

function createBitmap(bitmapData, x, y, lifeTime, parent) {
    var bmp = Bitmap.createBitmap({
        bitmapData: bitmapData,
        lifeTime: lifeTime,
        parent: parent
    });
    bmp.x = x;
    bmp.y = y;
    return bmp;
}

function Bytes2Bytestr(param1)
{
 var ret = "";
 var b = [];
 param1.position = 0;
 while (param1.bytesAvailable>0)
 {
    b = param1.readByte()+128;
    if (b < 16) {
        ret += "0";
    };
  ret += b.toString(16) + " ";
 }
 return ret;
}

function StrToByteArr(param)
{
    var c = "";  
    var bmd = Bitmap.createBitmapData(1, 1);
    var bytes = bmd.getPixels(bmd.rect);
    bytes.clear();
    var arr = param.split(" ");   
    for (var i=0;i<param.length/3;i++)  
    {   
        c="0x"+arr[i];
        var num = parseInt(c, 16);
        bytes.writeByte(num);
        // trace(bytes);
    }
    return bytes;   
}

function extract(data) {
    var bmd = Bitmap.createBitmapData(1, 1);
    var output = bmd.getPixels(bmd.rect);
    output.clear();
    var dataBuffer = [];
    dataBuffer.length = 4;
    var outputBuffer = [];
    outputBuffer.length = 3;
    for (var i = 0; i < data.length; i += 4) {
        for (var j = 0; j < 4 && i + j < data.length; j++) {
            dataBuffer[j] = BASE64_CHARS.indexOf(data.charAt(i + j));
        }
        outputBuffer[0] = (dataBuffer[0] << 2) + ((dataBuffer[1] & 0x30) >> 4);
        outputBuffer[1] = ((dataBuffer[1] & 0x0f) << 4) + ((dataBuffer[2] & 0x3c) >> 2);
        outputBuffer[2] = ((dataBuffer[2] & 0x03) << 6) + dataBuffer[3];
        for (var k = 0; k < outputBuffer.length; k++) {
            if (dataBuffer[k + 1] == 64) break;
            output.writeByte(outputBuffer[k]);
        }
    }

    output.inflate();
    output.position = 0;
    return output;
}

function compress(data)
{
	data.deflate();
	// Initialise output    
    var output = [];    
        
    // Create data and output buffers    
    var dataBuffer = [];    
    var outputBuffer = [];    
    outputBuffer.length = 4;
	 // Rewind ByteArray    
    data.position = 0;    
        

    // while there are still bytes to be processed    
    while (data.bytesAvailable > 0) {    
    	// trace("wtf");
        // Create new data buffer and populate next 3 bytes from data    
        dataBuffer.length = 3;  
        for (var i = 0; i < 3 && data.bytesAvailable > 0; i++) {    
            dataBuffer[i] = data.readUnsignedByte();  
            // trace(dataBuffer[i].toString(16));
        }    
            
        // Convert to data buffer Base64 character positions and     
        // store in output buffer    
        outputBuffer[0] = (dataBuffer[0] & 0xfc) >> 2;    
        outputBuffer[1] = ((dataBuffer[0] & 0x03) << 4) | ((dataBuffer[1]) >> 4);    
        outputBuffer[2] = ((dataBuffer[1] & 0x0f) << 2) | ((dataBuffer[2]) >> 6);    
        outputBuffer[3] = dataBuffer[2] & 0x3f;    
            
        // If data buffer was short (i.e not 3 characters) then set    
        // end character indexes in data buffer to index of '=' symbol.    
        // This is necessary because Base64 data is always a multiple of    
        // 4 bytes and is basses with '=' symbols.    
        for (var j = dataBuffer.length; j < 3; j++) {    
            outputBuffer[j + 1] = 64;    
        }    
            
        // Loop through output buffer and add Base64 characters to     
        // encoded data string for each character.    
        for (var k = 0; k < outputBuffer.length; k++) {    
            output += BASE64_CHARS.charAt(outputBuffer[k]);    
        }    
    }    
        
    // Return encoded data    
    return output;    
}    

function loadBitmapData(width, height, raw) {
    var bmd = Bitmap.createBitmapData(width, height);
    bmd.setPixels(bmd.rect, extract(raw));
    return bmd;
}

function init() {
    ScriptManager.clearTimer();
    ScriptManager.clearEl();
    ScriptManager.clearTrigger();
    for (var i = 0; i < XSIZE; i++) {
        var blocks_row = [];
        for (var j = 0; j < YSIZE; j++) {
            var block = {};
            // trace("here");
            blocks_row.push(block);
        }
        blocks.push(blocks_row);
    }
    bmd_stab_up = loadBitmapData(32, 32, raw_stab);
    bmd_player = loadBitmapData(22,22,raw_player);
    bmd_block = loadBitmapData(32, 32, raw_block);
}

function createBackground() {
    blackCurtain = $.createShape({
        x: 0,
        y: 0,
        lifeTime: INT_MAX
    });
    blackCurtain.graphics.beginFill(0x00CCFF, 1);
    blackCurtain.graphics.drawRoundRect(0, 0, Player.width, Player.height, 10);
    blackCurtain.graphics.endFill();
}

function createMainCanvas() {

	
	mainCanvas = $.createCanvas({
        x: 0,
        y: 0,
        lifeTime: INT_MAX
    });
    g = $.createShape({lifeTime:2,x:-100,y:-100});
    g.graphics.moveTo(0, 0);
    g.graphics.lineStyle(2, 0xFFD700, 1, false);
    g.graphics.lineTo(32, 0);
    g.graphics.lineTo(32, 32);
    g.graphics.lineTo(0, 32);
    g.graphics.lineTo(0, 0);
}

function createPlayer() {
	player = {};
	
    var pic = Bitmap.createBitmap({
        bitmapData: bmd_player,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    player.shape = pic;
    player.shape.x = tl.x + 64;
    player.shape.y = tl.y + 32;

    player.collisionBox = $.createShape({
        alpha: 0,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    fillRect(player.collisionBox, 5, 0, 16, 22, 0x000000);
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
    player.ySpeed = 0;
    player.xSpeed = 0;
    player.currentPower = 0;
    player.lock = false;
}

function placeObj(map, x, y, type) {
    var block = {};
    block.type = type;
    if (type == TYPE_BLOCK) {
        var bmp_block = createBitmap(bmd_block, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp_block;
        map[x][y] = block;
    } else if (type == TYPE_EMPTY) {
        map[x][y] = block;
    } else if (type == TYPE_STAB_UP) {
        var bmp_stab = createBitmap(bmd_stab_up, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp_stab;
        map[x][y] = block;
    };

}

function createMap() {
    for (var i = 0; i < XSIZE; i++) {
        for (var j = 0; j < YSIZE; j++) {
            if (i == j || i == 0 || (i == XSIZE - 1) || (j == 0) || (j == YSIZE - 1)) {
                placeObj(blocks, i, j, TYPE_BLOCK);
            } else {
                placeObj(blocks, i, j, TYPE_EMPTY);
            }          
        };
    };
    
    placeObj(blocks, 20, 13, TYPE_STAB_UP);
}

function createDragModels() {

    var static_stab = createBitmap(bmd_stab_up, tl.x + 22 * 32, tl.y + 13 * 32, 0, mainCanvas);
    var dynamic_stab = createBitmap(bmd_stab_up, tl.x + 22 * 32, tl.y + 13 * 32, 0, mainCanvas);
    var model = {};
    model.still = static_stab;
    model.move = dynamic_stab;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

}

function createMainButtons() {
    var a = $.createButton({
        x:50,
        y:0,
        parent:mainCanvas,
        text:"SAVE",
        onclick:function(){
      saveMap(blocks);
    }});
    var b = $.createButton({
        x:width - 100,
        y:0,
        parent:mainCanvas,
        text:"LOAD",
        onclick:function(){
            player.shape = null;
      // loadMap("JJJJJJJJIAAAAABIIAAAAAJAIAAAABIAIAAAAJAAIAAABIAAIAAAJAAAIAABIAAAIAAJAAAAIABIAAAAIAJAAAAAIBIAAAAAIJAAAAAAJIAAAAAAJAAAAAABIAAAAAAJAAAAAABIAAAAAAJAAAAAABIAAAAADJJJJJJJJ");
    }});
}

function keyDown(key) {
	if (key == 87) {
		if (!player.ySpeed) {
			player.ySpeed = JUMP_SPEED;
            GRAVITY = GRAVITY_FLOAT;
		} else if (player.currentPower == 1) {
            player.currentPower++;
            player.ySpeed = JUMP_SPEED;
            GRAVITY = GRAVITY_FLOAT;
        };
	};
	if (key == 65) {
		player.xSpeed = -3;
	};
	if (key == 68) {
		player.xSpeed = 3;
	};
}


function keyUp(key) {
	if (key == 65 || key == 68) {
		player.xSpeed = 0;
	};
    if (key == 87) {
        GRAVITY = GRAVITY_ORIGIN;
        if (player.ySpeed) {
            player.currentPower++;
        };
    };
}

function gameRunning() {

    // the order is important!
    checkCollision();
    movePlayer();
    checkStab();
    checkGround();
    checkCeiling(); 
}

function movePlayer() {
    if (player.ySpeed > -2) {
        GRAVITY = GRAVITY_ORIGIN;
    };
	player.shape.x += player.xSpeed;  	
    player.shape.y += player.ySpeed;
    
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
}

function checkGround() {
    var hit = false;
    var x = player.collisionBox.x;
    var y = player.collisionBox.y;
    var start_i = (Math.floor((x - tl.x) / 32) >= 0) ? (Math.floor((x - tl.x) / 32)) : 0;
    var end_i = (Math.floor((x + 22 - tl.x) / 32) >= 0) ? (Math.floor((x + 22 - tl.x) / 32)) : 0;

    var j = Math.floor((y + 22 - tl.y) / 32) >= 0 ? Math.floor((y + 22 - tl.y) / 32) : 0;
    var i = 0;
    for (i = start_i; i <= end_i; i++) {
        // trace(end_i);
        // trace(j);
        if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
            if (player.collisionBox.hitTestObject(blocks[i][j].shape)) {
                hit = true;
            }
        };
    };
    if (!hit) {
        player.ySpeed += GRAVITY;
        for (i = start_i; i <= end_i; i++) {
            if (blocks[i][j+1].type == TYPE_BLOCK || blocks[i][j+1].type == TYPE_BLOCK_SOLID) {
                if (y + player.ySpeed + 22 > blocks[i][j+1].shape.y) {
                    player.ySpeed = blocks[i][j+1].shape.y - y - 22;
                    break;
                }
            };
        };
    } else {
        player.ySpeed = 0;
        player.currentPower = 0;
    }
}

function checkCeiling() {
    var hit = false;
    var x = player.collisionBox.x;
    var y = player.collisionBox.y;
    var start_i = (Math.floor((x - tl.x) / 32) >= 0) ? (Math.floor((x - tl.x) / 32)) : 0;
    var end_i = (Math.floor((x + 22 - tl.x) / 32) >= 0) ? (Math.floor((x + 22 - tl.x) / 32)) : 0;

    var j = Math.floor((y- tl.y) / 32) >= 0 ? Math.floor((y - tl.y) / 32) : 0;
    var i = 0;
    for (i = start_i; i <= end_i; i++) {
        // trace(end_i);
        // trace(j);
        if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
            if (player.collisionBox.hitTestObject(blocks[i][j].shape)) {
                hit = true;
            }
        };
    };
    if (!hit) {
        // player.ySpeed += GRAVITY;
        // trace(j);
        for (i = start_i; i <= end_i; i++) {
            if (blocks[i][j-1].type == TYPE_BLOCK || blocks[i][j-1].type == TYPE_BLOCK_SOLID) {
                if (y + player.ySpeed < blocks[i][j-1].shape.y + 32) {
                    player.ySpeed = y - 32 - blocks[i][j-1].shape.y;
                    break;
                }
            };
        };
    } else {
        player.ySpeed = 0;
    }
}

function checkCollision() {
    if (player.xSpeed < 0) {
        var x = player.collisionBox.x + 2 + player.xSpeed;
        var y = player.collisionBox.y + player.ySpeed;
        var i = Math.floor((x - tl.x) / 32);
        if (i < 0) { i = 0; };
        var start_j = Math.floor((y - tl.y) / 32);
        if (start_j < 0) { start_j = 0; };
        var end_j = Math.floor((y + 21 - tl.y) / 32);
        if (end_j < 0) { end_j = 0; };
        for (var j = start_j; j <= end_j; j++) {
            if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
                // trace("hit");
                player.xSpeed = 0;
            }
        };
    };
    if (player.xSpeed > 0) {
        var x = player.collisionBox.x + 22 + player.xSpeed;
        var y = player.collisionBox.y + player.ySpeed;
        var i = Math.floor((x - tl.x) / 32);
        if (i < 0) { i = 0; };
        var start_j = Math.floor((y - tl.y) / 32);
        if (start_j < 0) { start_j = 0; };
        var end_j = Math.floor((y + 21 - tl.y) / 32);
        if (end_j < 0) { end_j = 0; };
        for (var j = start_j; j <= end_j; j++) {
            if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
                player.xSpeed = 0;
            }
        };
    };   
}

function checkStab() {
    var x = player.collisionBox.x;
    var y = player.collisionBox.y;
    var bmd1 = Bitmap.createBitmapData(1, 1);
    var p1 = (bmd1.rect).topLeft;
    p1.x = 0;
    p1.y = 0;
    var bmd2 = Bitmap.createBitmapData(1, 1);
    var p2 = (bmd2.rect).topLeft;
    p2.x = player.shape.x;
    p2.y = player.shape.y;

    var start_i = trimX(player.shape.x);
    var end_i = trimX(player.shape.x + 22);
    var start_j = trimY(player.shape.y);
    var end_j = trimY(player.shape.y + 22);
    for (var i = start_i; i <= end_i; i++) {
        for (var j = start_j; j <= end_j; j++) {
            if (blocks[i][j].type != TYPE_EMPTY) {
                p1.x = blocks[i][j].shape.x;
                p1.y = blocks[i][j].shape.y;
            };
            if (blocks[i][j].type == TYPE_STAB_UP) {
                if (bmd_stab_up.hitTest(p1, 255, bmd_player, p2, 255)) {
                    trace("hit");
                    // $.root.removeEventListener("enterFrame", gameRunning);
                }
            } else if (blocks[i][j].type == TYPE_STAB_DOWN) {
                // TODO
            } else if (blocks[i][j].type == TYPE_STAB_LEFT) {
                // TODO
            } else if (blocks[i][j].type == TYPE_STAB_RIGHT) {
                // TODO
            };
        };
    };

}

function gameOver () {

}

function ready() {
    init();
    createBackground();
    createMainCanvas();
    createReadyButtons();

}

function main() {
    init();
    createBackground();
    createMainCanvas();

    createDragModels();
    createPlayer();
    createMainButtons();
}

main();
loadMap("JJJJJJJJIAAAAABIIAAAAAJAIAAAABIAIAAAAJAAIAAABIAAIAAAJAAAIAABIAAAIAAJAAAAIABIAAAAIAJAAAAAIBIAAAAAIJAAAAAAJIAAAAAAJAAAAAABIAAAAAAJAAAAAABIAAAAAAJAAAAAABIAAAAADJJJJJJJJ");
var myTextField = $.createTextField("aaa", {x:100, y:100, lifeTime:INT_MAX});
// myTextField.x = 100;
// myTextField.y = 100;
myTextField.text = "TEST";
// myTextField.autoSize = TextFieldAutoSize.LEFT; 

$.frameRate = 40;
$.root.addEventListener("enterFrame", gameRunning);
Player.keyTrigger(function(key){
    keyDown(key);
},INT_MAX);
Player.keyTrigger(function(key){
    keyUp(key);
},INT_MAX,true);

$.root.mouseEnabled = true;
$.root.addEventListener("mouseMove", function (e) {
    

    for (var i = 0; i < drag_models.length; i++) {
        if (drag_models[i].dragging) {
            drag_models[i].move.alpha = 1;
            drag_models[i].move.x = e.localX - 16;
            drag_models[i].move.y = e.localY - 16;
            if (blocks[trimX(e.localX)][trimY(e.localY)].type != TYPE_EMPTY) {
                drawBound(trimX(e.localX), trimY(e.localY)); 
            } else {
                drawBound(-100, -100); 
            }
        };
    }

    for (var i = 0; i < drag_models.length; i++) {
        if ((e.localX > drag_models[i].still.x) && (e.localX < drag_models[i].still.x + 32) 
        && (e.localY > drag_models[i].still.y) && (e.localY < drag_models[i].still.y + 32)) {
            drag_models[i].still.alpha = 0.5;
        } else {
            drag_models[i].still.alpha = 1;
        }
    };
    
});
$.root.addEventListener("mouseUp", function (e) {
    for (var i = 0; i < drag_models.length; i++) {
        if (!drag_models[i].dragging && (drag_models[i].still.alpha == 0.5)) {
            drag_models[i].dragging = true;
        } else if (drag_models[i].dragging) {
            if (blocks[trimX(e.localX)][trimY(e.localY)].type != TYPE_EMPTY) {
                placeObj(blocks, trimX(e.localX), trimY(e.localY), TYPE_EMPTY);
                main();
                loadMap(saveMap(blocks));
            }
            drag_models[i].dragging = false;
            drag_models[i].move.alpha = 0;
            drawBound(-100, -100);
        };
    };
});