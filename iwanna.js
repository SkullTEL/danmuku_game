/*---------------copyright by Neil, You, Shanghai Jiaotong University 2015, 7 ------------------*/
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-=";
var raw_stab = "7Zf7b1NlGMf5Q-zZf8DEeIkJMRFN1AghIoIBIfoDiPKTRqIxXAKBsa3rvT3t1q0bOJRIMEQjiLIx6tzanvs5vd-XnvZ0627dpci+PueAEBOCG274i2mevG8v6ed9nuf7PM97NgHY9L89liGZiIEX2P+QLyAcDj1xbrO5jKs-DUNVRyHL47h2NYSlxdYTPQPPxokfojWEG9efaA6Qy1dQ1TQkEiwUcRwJOYWYkt9w7srKCpaWliDFchAFEbKoQBZYiJEIxm7J9N2y8ZsN48-OLePXEQlKPImYGofIp6AKMmJiGBIn4crlEBqN5obGoFBoQBLj4FgJkiSAl0SwEoeIMIrfwhuqAzSm5lGv61AV4kcViBIPzjBZAkt1wEpRxONZysH6s+-cAcU8gWotD0WRyX+KvyhSDEgHsgwlxuLmyBC8nnMb4rtAehOlUeiTGaq7GAQuRe8Fky-ROWSFBcuOoaPdjsHzl9edX61qqGhJaDXSnJKEyKWJzxGfJx0S39xHcbatDW5Hz-rVHL1uDI8SM435Zh31yTLiapH6ThaiHCZuFAqnUA0Qn-sdPrcVA70+TJQK63aGeKqAYlEj7WmUf410kIHAU-6liOm3zEtQKQ9cdBznBvpw+tRx+DzOdWGzURWFYglTjTrloIpajfQfk0kPnKkJSTL2hg4kRKMs+gcG0N7RCYfDhXyh9C-0voKpqWnEqJ4mKnnUdZ3YNdNUVTWZf3Ef8KPo7++Hy+XCsWPHEegNPjZ-ubWCn6-xKJbzaMyVoGnVf+SzLItgMAiH3YHOzg54vDbcHB5Dq3Vnzfzbf6wQq4naZAnlWprmTW1V-L6+PlgsXfB63TjTdhRnTlsfr97lDNI5ivtUGWWtaOZ9LXw35cBpa4e1y0F5UdfEXlhYQFSMoaQVqN4MzZP2Vhn-u3yLqYFuxouTJ05TT1pTP8DoaAgjoSHKeR216jT0+hTttdXzu8h-txMepw3dnh58eeQEhoZuri7vrRb5Wzb7aTFPMa-OmrHXqqvndxHf5XLCZbWAcfpw9KuTuHTp+9X5Horg+i9XUSxlUcgZ-BmTuWa+00m90AG-uwftbTYMDn5DszH1qNmI1nKL+madfI-STJNQLs5Cr5H-euVe73k435iDxgzkOO6B-twu+D1O4gfAeAI4duIoGF-gkb6PDIcxNhZBOiub-1cpNYlP-usTj+QbpigKeJ6-zzfiz7js8Dq6aSYH0Gk5AwvVQzyZfsi9DpDoP1UlSz5EwfIjtE+gUlw2-ddNfu1eDep35y-1Xt7ky6YpigrO5AeJb73PZ5x98LiC8Pps+OL4YTCB3of6-sOPQ6T7cSRTKiLsLYqpgvLENPleN+8cmlYxZ7BhMVWh+cPTGXjzDiaJPM0higdP-a8vQHzqfW7Ddxs8dgYuu4-yYYHDdQpWewcufnvFGKwPeu1SC7fngXKpgkQyY+okmUxislHF9JxOs0fHzPQMZmdmyWaQSWfoDCpSdA9NJRLmc1gmlaSYybgw+DX1Xxv8DIMepps04EWPl0GA9kE-abPtLNx2-9+fJQTyRwjTnNGQLejI5MsoTlQwt7CIucV5Wpt0913E7PwS5ujZJ1coI5nOIZMrIp0pUMxyyOZLSNB6fvAirA43xTsAH1l3Ty-8-gBZr2kME4CHcWM8Mn6ff+G7ALa++yz2HNiB9w7uxr7Du8h24qMj+3Hg8z04eGQvDnx6zz57H-s-2Yl9h3bQ+g72fUx2aCc+OLybbBe2bHsJL7-5HF7Z+iK2vPUC3nh7M17bZuyfx6v02evbN+PpZ57C7g+3G+w-Aew-";
var raw_block = "VZf3U5Rptseb0IQGupumgYZuaJqco3SkSZIUQdHBsOoEZ8YxAJJFgoAECSLI4JjG2RUkIxhmdHR2d1LV1tStulX3h-v7-VM+93Rrbc3+8K3ned9+nhO-55y3ScywU3PMxf7Dpdj2OyivP8D+o0dwN+yn5Eg5pXUVVNbXUtq4H9fh-bgby6lqKBPsp6yhAfdBOd9UT9tAD3UnGrDXOOV+naylVDZV0T3eTcPZBhx1ZdirXZRUuSmrPYOtxo29toRsh4VH33-C6KMyTnRaONOTxuEWE9Vf6Bn6aw3931hpag3lUEeYIJSmLjUTy8V8OhDL0P0mPh3M4dAFA4u7p1n55TLnhnM4eEFLc6+WczdiefJ7M+fG4qi7GMxnw0a+HEqiuSWNMwPRnO7NJtutZvn3A-Q8sNB1z8LHY2GUfK7AfV5B-1oy998dobEtDPeXCmraA6jvCWZs1UVTZzB932VydiyUolMK6tsV3Hlj5+SIEscZBb33i-lq1szEpovGrgDspxVM71RxczOPuhYFXX9TMvQknfxSPbPbJXwxE0-PwyzOz5mo6fCl9WECU69LaF1KpabVn-N3U2hdzuXSw1RGNotp6gui40EaTf0aqtuUNPb5c-amhhOjgRzs9KPzYS7n5+PpX8nj5GgY9d1KBlaKOTtqEnvUDGyrGd1IIq8kntN90ZRd9KX7cS4ju4W0PI5h8FkOfZsFXHqs5sJjJYNv4uh-G0fHMy09O0F0r0VwfVO40+XPp7ci6VtN59I9o-iVyo2XqfRtael8GiQIoHM1mIkf42h-oqWqTeyW2Ey8MjO0kiaccTH6uJQv74Yz9jKH6y-i6NkOp28viitrero3TUz8PZveV-Fc2YumZSeCSysqRn+wiMwc2p7o6XgayeBzEz1bYsdOJLd-KWBwN4Gu9XC5r6F-N4qF34vpf2bi4rf+DG5nMPmjmf7vcmg+nMOd360Mvkqi-4WBrg0tA3tpTLwrpnfHyOVlFSNvkri6k8aN1zb6n2fKOw2dG2qubmkY2DVwbcvI6MsUrm7GSFzC6VjT0Po0XH5PZvyNg97NdDrX4+je1jH0QzR9YsfgGxU9TzI5cTCVxf8q4NrLNC49kdhs6Ln+vJD+nXyRE0P7RqC8C6NrzczNtw7Rl07rSoi8C6ZrM0zkhtMr+ife5NC7YaL9qV7ipqLlaQjdG4mM-WAX-Wm0SOx7dzVM-JQuPsbQtiUcFP6daMxi8Y9irr-OEp-CBXqGJQ89G8m0iy9dwpO2p6J-3cTkuwIGnieL-jA6tkLofCZ2SJ67tqO59lzivW2g3ZN3D9b1XHuWLHckjtuJIksn-ku8nsfJbwY6d33ofpIh+jNZ+FcRM7-ZGXplFF1yZi+dq9tJ7-3eUnv1dW-FMPlTNv17ZtpWNKI3VLgYTIfIbFvX0bFpoOdZDF07st+IEN8NjL3JYuafRRKnGImJWs6E0r4e4fW-a8+HnuUMjov+xT+sTP8qeRLuXFmVvG4neHnXuaXy5vnKarg3Nj3bkbKKH5t6kSl61iQOEqOWv+loXxGf1qLlOUJyEC17yd1qlNgtMVnTen3p2AjxyupYlXM7Cq-+Mw1Z3PpN8r2bL+dDRa5a7holRiJjx0fsljivR4qMUFqWxd9NLW2S9-YNFX1P1QzvxUnNpEpckhl8mcz1l2bad2K4uBElsRM9qxquSL10yJ02D2dWI+kQeW17CtqXUzh2NIvxt0lcErvaxN72dbF5N4KB13p6hC9ta8FcXg2kZT2I1jWl8Er6yI6BqR8zuSr5HXuRx+3vnczt2bntwQsbI+s5DG5mMib5at-V0botXFwPpWddxaXNEJEh8dsOYHi1iP2n5P67XDrfKIWTRq69yuHzhwaaBiW-j-IY+9HCyE-xjP6UydQvSUy-tXBhKoG24UIeLdcx3JnAUHMIc80R3DoexWRzJGOnonkwU8j8Xh4X9sI4t+cnOQnk6koA7W80Uv95zCzHcXvJyfn2o7z8nw4WfpXe-HcD4y8LSC9JRKFQUHfUyOKzCsY3DzG1+xFzrw6x9MMhDA4Vfn4KvqtN5rfzLv7ZnM+vR3P4+UQePzfn8uJMKqu96Tx5nM-kyyRaJQb9-0jkxs9p3PtHFVvvvmBzs4ypwXxsdunT7eWcbrVxqjMSU65CdCtJ0lpIVPqi1fuiMQShjgpEE68k0hyASuNPsMKffQofhutc3D1Vz62mUiaPORg5KTk4YmO0Np2vms181p3C7dcnpddUc-FrJ2cuFPHVxzV0n5Pe2VyAnyKAQPE1VBCsCBbdPoTL-t7lk0wfrMFH4eeNhULOBQiCZB8juuN9tagUgQJfQuSdR4afr5wLUHifPTJ8BUGBvhyss6ILC-wg5-3Z8A+IUulJlzvFojdDEUmaMogUfwVzJwv43+ufYTPFeO-o-KMwBQaTpZKzSh+siiCsyhAKfJRky91MP18y5Z4H8cEBGFWhJAWFkOITQKLczxE-smTNUPrL+XCyfH1IDAjAkVNIb3UB0-vi6a1V0t0USZVBz+3aWv5vpJpis9KrP9I-CKOsH2WEMV0jebVlMOqKpcduotVqosMhPcNuodcqfdART6c9nmv7ErixL5Fxq5nrTguDLgMTjmjGC4sYcSZx3pmGM6uE-jon406p38oYhmuSOBAeRr-dyvdf1ZETG4bCR4E6RIFR1k-SY5g7kMVAaRpdpfnMlCfwdUU0sxVxTFQlezFfHsOSS8ODcuGzQ+a2K5vr7nTG3TH0lyQwbLMzWpbAlYpktAoNZvHLg4QPa+IHePbaDzlTSFzVsub6+JIje7PkukjiP5QTyeMSPbds0YyJrkmniZF9Ydyvi+Xx0QyKAzx2+5Ll70OR3ElSvEeqR5-4k6WOpdaiw5kQhcsciUvWssRoSixR2OW5zmKgPCEaa4qR8vQkMlVhwi8-goULySKjuyCKJXckMw6pfYn7tFV8tunY-sLBwzMOEsRWpZ8fKqklg+z3x+s4YEqiKl6LNSGShhwrtz6yMVmXy8SBfMYFY3V53BCM1RexVJ3FnMR0tDGXqRMVHEk0evmtClUJv2Q2W2NZKo9iVvRPOUzMWWVfoOXFWQePTpR6uazyDyFAeJqlVTB6IJlbjbWMNabRfjiP6rRc7kgfub9PzR2rnsU-wfP8oFDDoj2Um65Q5kqjmShNoTI2iAjpP-HC8Q6bmcXyaGacUcItIzP2CBby1bw9bmP5WJnUlA+RUis5YeG07oviTkUos7YEJktC6KqI4VBKGgs1cczZNRLDiP-ArF3HtN3IuCuGsRIdMzYtS5WpDJSlk6L0w+wn86rYzB3Rf9MVzQ05d9Mp3xi2UJ59bOXhCac3R8kB8l0jXL1b6+FlINP5ZiZdMtsrTRxOTuJWbTwj4tuI2-CfkHejLplp0o9HyoTjdj0LzgT5LYOsICUmP5nP+yzik9SVO8J7ftyt44bEa+2zYhb-4iLew2VVINcqxc-SYMlRCLPFFqaEMx3l6dSlpTIn+m-b9F4O-RnTUqt3ivXM28KZc4Rxr1jNPaeZAUcKicE+6MSGy0Upck5mjsOPUWcIozYDC9khvJOZ8O3JCkyiPzYwkO6yFGbdGrExgjs2NV9bI+hxFHIwVd7XJnLTHic9IP49HO8x5uGzvL-plG8fV5TYaGC+JIP20jzigqUGg-0YKMlmqSSWxTK1+KfjriuBbwq1vD6ezaPjTuI8dRag5Jo7joUSNUPuJMl-nMTSSIvkpD5Fvj+k50w7RIfTKDVkFH2mf2NanidF-4RL-qfYIpl3pdNTWUSC6E8Ubi9-0sgfbUf45XKVoIb-Pn+M3z6v4V-dDaycq-L2FIu-L0PCjSWnfEu7jVIjBuZsJi6XyvxPKmRW9C9ahd9St3PCuXnh3r8heZl1hjMr-F+0enpaIpcLYknw8-ilYLC8mAeH3cxIvU7XFHK3ws58jZX5JrvkPOt9-oP8vX1vwRXMdLmS+3YV31g9vVv+i+bYmT1WID0kltvlZi8WKi1-QjIzVRbJUTz3a5Lpz46kSPyOCfTBGKr0zgRPjHUCjSBaYPwAg2duyJxJ1sk3elUR8wfimDoQwX3h67dlGVJHVViMJo5k6DgWpeZIjOY9YrUfIHujjnpzuEDDKYueIh+ZzzLTQsJ1aEI06H0D0Upv8QmUORUaiK9wLcQnkAiZ0RFKJTp1OLqQCKpNEfzFHEa1yDoeHcaZaPkvZo76f476";
var raw_player = "jZVZTJRXFMc-Zx9mcViEgRlnicyIUpCGALWIC7jw0BqDQQVFBURqy5JgKwoVKLVqgxCMS0VqLS-UBWxVaGuqYxptY1MLbn1o2oemiU37ZCPEMmy-XgYyVQHh4Z-vnnv+53-vPd+550qA9ByInTcPSZLQKdTolQqMCjmBciUhcjUzpBlYzBH09Q9IE8ROBgYFXomOIkYtsdwZxiqnkZWOANLtJtbOd7JijgOtQkF8YiI9vb3T0vQODrF4yVISQhXkuNVsiwlim0vHG9EGcoW9xaUlP9pCeuRs33li4xYwNA3df-sHfPykWUoedtbxz80m-u5o4NHNFn5pO0BOpJoNEUoKXrKwQC9Dr9GKvQxPqTs0PIxeZ8RqUPHwh1aqtq-l3qWjFG9eT1-XF2Ktg2TF6MmxatjoCkWSyVmcupLhoaEptbu777E0JZGvmypYFu3gclMxsXYzPZ7j8Ecr6+abyAySfDmK1UoYlCr6+vqnleeVy1K421LBk+6L8NvH9N44Br93wl9XuH+yhjyXiawoE2kmGTZzKN6BKWuDR4+fkJq2kPtttVTt2EZGWjIlGemsWrSITauT8d47RemSlzGrVVjDjFz78ftp19q6ten86Wnw-cOncfbDQpGLi7gdFp9dEZMwqUZubi5bt24hPz+fgu2FZOfkYg6dRd7ryXR9eYzbVw7huVDFz1frYOAGe3My-OtkGgO4XV46oe7ze3oae0syadidTXFWKmWb0ti42u2b15g3ojVnirGGOGFfr3xnnO7ZM2c4f76N1tZWwkKCJ9CP5nRtHidr3xRjq4CKMFMhbtvnaIMLxL2WqBf4rrp60pwkJyXSeqSKU-tKxjRNzJ57hNMN1zja0InD1oHWtAat8GlnxiNpKgWniHRJywkx923d-nGaj3t6kUlKjr1bIKxfufFZJSFGJzr9yP87IfABRls7EVGXkIwphAYFcfnTqxzcfd63h1MCzQLfNNaP066rP+zjZC+3s78sE2uwTZwzAZUmVfSa5ciUy1CoM5Bp1xBosPJTS5GI8tC0bwcbAnScFrFHBG7WNY7Tbmw8zua8t1i3PhtT2Ex0Thsm+xwCzW6C7PMxO8IJFr1OLR-Nf0t9hYh6QLzbxh5hfyWwa8TxgjoecatCFhC5qY652Y1EZtcQnLBK9GIFr2oMBEoyH6emLJ+4cDMHxPxhYRdOoftJczM6ca8kyYAkjxTf0XpxyXW8ppxFplqPdaxuggW2Cpwr3MGFPRUT6nk81znX1satW7eIcrt4r3oXb5cVsXNnKc2Nh1gYasKlkuMU+0uabaHjo6N0lpfTse-9CfWGRZ9sb29-pn5nGg10d3X5OV137mA0Gv3+8AgLdx-cf+G5+7xeP18loBgbqxVKP0epUo2+feKd04z5R+7GwOQ9DW9-P5bwcB9XO+P-OKfN7uc4HA7fXMDIemN+a0QEA4ODz2gJx38J";
var mainCanvas;
var blackCurtain;
var INT_MAX = 2147483647;
var player;

var width = Player.width;
var height = Player.height;
var XSIZE = 22;
var YSIZE = 15;
var GRAVITY = 1;
var JUMP_SPEED = -10;
var player_bytes = "00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 2e 29 29 ff 00 00 00 ff 0b 04 07 ff 0c 05 04 ff 0e 04 03 ff 11 03 05 ff 14 03 07 ff 01 00 01 ff 1b 18 1a ff f8 fa fb 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff fc ff ff ff 38 2b 28 ff 2d 07 00 ff 44 21 17 ff 47 21 0e ff 46 20 0a ff 48 1f 10 ff 53 2a 21 ff 45 23 20 ff 09 04 04 ff 33 36 36 ff f3 f4 f4 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff f9 fc fd ff 3e 3f 40 ff 35 16 04 ff 5d 26 07 ff 64 2d 12 ff 64 25 0b ff 68 2b 0d ff 61 26 07 ff 5f 25 09 ff 63 2b 1b ff 48 24 1d ff 00 00 00 ff 2e 30 2f ff fd ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff f7 fa fb ff 00 00 00 ff 37 15 05 ff e5 b5 8b ff f0 c4 99 ff e9 b4 8e ff ef c4 a1 ff d9 ac 87 ff 5d 24 07 ff 58 1a 05 ff 65 2c 1b ff 2f 0c 02 ff 0c 08 09 ff f9 fc fe 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff fd fe fe ff 0c 0b 0e ff 1c 0d 06 ff e5 c9 a6 ff 7e 66 53 ff d2 b2 94 ff 6d 5e 57 ff f8 ce b0 ff e5 b5 88 ff 59 2d 0c ff 5d 1c 08 ff 5b 25 16 ff 00 02 03 ff 3e 42 46 ff fe fd fd 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff cf cf d2 ff 40 3d 36 ff b8 99 7a ff 41 2b 20 ff b3 99 6d ff 2e 1f 18 ff f3 be 96 ff ff e2 a6 ff 56 2a 10 ff 55 12 00 ff 64 2d 12 ff 2e 09 00 ff 0d 05 06 ff f8 f8 fa 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 46 41 3d ff d1 a1 7a ff f6 cf b1 ff ff dc 9c ff f4 c3 95 ff ff e0 b5 ff ff e8 b9 ff d3 9a 80 ff 62 25 10 ff 59 28 10 ff 43 10 02 ff 1e 18 16 ff f9 fb fb 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff ef f2 f6 ff 42 43 39 ff d3 ac 82 ff 7e 69 64 ff 52 43 3b ff 6e 52 48 ff 47 3c 3c ff 5c 4e 3b ff f9 d2 9d ff 6f 3f 31 ff 18 07 06 ff 1c 17 0e ff bd cb c6 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 56 53 48 ff e6 be 8e ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff a9 89 67 ff ff e2 b1 ff 26 20 1b ff 00 00 00 ff 7a 2d 35 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 61 61 61 ff 60 60 5f ff 63 63 63 ff 65 66 67 ff 5a 5d 61 ff 18 16 15 ff 62 4d 3b ff ce b6 95 ff cc b9 8c ff be ae 7e ff d5 bc 8b ff ff fb c3 ff 7d 5d 52 ff 00 00 00 ff 00 00 00 ff 55 0e 0a ff cc 77 6f 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 7d 6e 55 ff 8e 78 5a ff 6d 59 42 ff 72 5c 43 ff 5b 4e 26 ff 00 00 00 ff 08 18 5b ff 09 18 55 ff 00 00 08 ff 30 00 00 ff bf 7b 75 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff a9 a8 a8 ff ab ab ac ff a6 a6 a6 ff 17 14 13 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 00 00 2b ff 9f 82 62 ff 9a 82 6a ff 00 00 1c ff 00 00 06 ff 17 10 67 ff 26 1e af ff 09 13 65 ff 01 00 00 ff 8d 00 00 ff c5 7f 7f 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 3b 37 36 ff a6 93 7e ff 9d 84 6e ff 00 00 00 ff 00 00 10 ff 1d 27 93 ff 9f 8e bd ff 94 8e b5 ff 20 1e b4 ff 09 10 50 ff 09 00 00 ff 09 0f 33 ff 00 08 7b ff 00 00 6c ff 48 00 09 ff 98 00 00 ff c1 8b 86 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff f2 f3 f4 ff 02 00 05 ff 95 7c 65 ff ff ff db ff c3 a7 7b ff 14 0e 21 ff 0b 0c 8e ff 00 00 98 ff 00 00 85 ff 0e 1e ad ff 1a 28 b2 ff 00 0e 3d ff 16 12 12 ff b3 a0 bc ff 88 78 ab ff 00 00 00 ff 9d 00 00 ff 9b 00 00 ff bb 90 8d 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 8b 8d 91 ff 00 00 00 ff 5a 44 1f ff 86 72 55 ff 1c 13 1e ff 01 00 35 ff 06 08 42 ff 09 04 44 ff 02 05 41 ff 04 07 52 ff 02 09 50 ff 11 0d 1c ff cd a1 6c ff ff ff be ff 99 84 69 ff 58 0a 0b ff 9f 00 00 ff 93 00 00 ff c4 8b 90 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 90 90 96 ff 5e 62 6b ff 56 57 5a ff 10 17 0f ff 0b 21 1e ff 10 1f 23 ff 11 18 26 ff 12 1f 2a ff 18 20 19 ff 13 07 00 ff 07 03 00 ff 00 00 00 ff a1 8d 7a ff ff ff d4 ff 33 26 1e ff 79 00 00 ff b7 00 00 ff 76 00 00 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 00 00 00 ff 06 14 2f ff 24 5c 8b ff 27 5a 90 ff 24 5a 80 ff 13 35 47 ff 11 03 04 ff 3a 08 0d ff 11 00 02 ff 00 00 00 ff 80 72 63 ff 30 19 18 ff 87 03 04 ff 91 00 00 ff 67 00 00 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff 9e 9b 9b ff 0b 07 06 ff 00 00 0d ff 00 03 24 ff 00 00 13 ff 00 00 00 ff 25 03 0b ff 4c 05 15 ff 55 07 0c ff 1c 00 00 ff 00 00 00 ff 13 00 00 ff 60 00 00 ff aa 67 69 ff ae 79 7a 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff be be bf ff aa ac ac ff c8 c8 c8 ff 28 26 25 ff 81 7f 76 ff 74 72 6c ff 73 73 6f ff 9b 90 8c ff 39 16 10 ff 25 06 03 ff 21 03 04 ff 37 1d 1b ff b4 97 94 ff b5 77 77 ff b4 84 83 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff fe fe fe ff ad ad ad ff 00 00 00 ff 00 00 00 ff 00 00 00 ff 0f 0e 0d ff cf ce ce 00 ff ff ff 00 ff ff ff ff ce d0 d0 ff 0e 0e 0e ff 00 00 00 ff 00 00 00 ff 19 1a 1b ff d1 d4 d3 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff f8 f9 f9 ff 00 00 00 ff 00 00 00 ff 06 00 00 ff 04 00 00 ff 00 00 00 ff 07 04 05 00 ff ff ff 00 ff ff ff ff 05 06 06 ff 00 00 00 ff 0b 00 01 ff 08 00 00 ff 00 00 00 ff 01 00 00 ff fb fb fb 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff 00 ff ff ff ff f9 fa fa ff 1b 19 19 ff 00 00 00 ff 09 01 01 ff 08 00 00 ff 00 00 00 ff 21 1e 1f 00 ff ff ff 00 ff ff ff ff 20 20 20 ff 00 00 00 ff 0a 00 00 ff 07 00 00 ff 00 00 00 ff 1c 1a 1a ff fb fc fc 00 ff ff ff 00 ff ff ff 00 ff ff ff ff ff 00 00";
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
    var e = StrToByteArr(player_bytes);
    var c = compress(e);
    trace(c);
    
}

function createPlayer() {
	player = {};
	var bmd2 = loadBitmapData(22,22,raw_player);
    var pic = Bitmap.createBitmap({
        bitmapData: bmd2,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    player.shape = pic;
    player.shape.x = width - 22;
    player.shape.y = height - 22;

    player.collisionBox = $.createShape({
        x: width - 22,
        y: height - 22,
        alpha: 0,
        lifeTime: 0,
        parent: mainCanvas
    });
    fillRect(player.collisionBox, 5, 0, 16, 22, 0x000000);
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
    player.ySpeed = 0;
    player.xSpeed = 0;
    player.isFlying = false;
}

function fillRect(g, x, y, width, height, color) {
    g.graphics.beginFill(color);
    g.graphics.drawRect(x, y, width, height);
    g.graphics.endFill();
}

function keyDown(key) {
	if (key == 87) {
		if (!player.isFlying) {
            player.isFlying = true;
			player.ySpeed = JUMP_SPEED;
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
}

function gameRunning() {
    checkCollision();
    // if (!player.willCollide) {
        movePlayer();
    // };
    
}

function movePlayer() {
	player.shape.x += player.xSpeed;
	if (player.isFlying) {
		player.ySpeed += GRAVITY;   	
    	player.shape.y += player.ySpeed;
	} 
    
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
}


function checkCollision() {
    var nextX = player.shape.x + player.xSpeed;
    var nextY = -1;
    if (player.isFlying) {   
        nextY = player.shape.y + player.ySpeed + GRAVITY;
    } 
	if (nextY > height - 22) {
        player.ySpeed = 0;
        player.isFlying = false;
	}
    if (nextX > width - 22 || nextX < 0) {
        player.xSpeed = 0;
    };
}

function main() {
    init();
    createBackground();
    createMainCanvas();
    createPlayer();

    $.root.addEventListener("enterFrame", gameRunning);
	Player.keyTrigger(function(key){
 		keyDown(key);
	},INT_MAX);
	Player.keyTrigger(function(key){
 		keyUp(key);
	},INT_MAX,true);
}
main();