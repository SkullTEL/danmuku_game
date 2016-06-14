/*---------------copyright by Neil, You, Shanghai Jiaotong University 2015, 7 ------------------*/
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-=";
var MAP_CHARS = {};
var raw_stab_up = "7Zf7b1NlGMf3h-iz-4CJ8RITYiKaqBFCRASDQvQHEOUnjURjuAQCY1vXe3varVs3cCjRYIhGEGVj1Lm1Pfdzer+vPe3p1t26S5F9fc4BISYEN9zwF9M8ed9e0s-7PM-3eZ73tAFo+98eyZBMxMAL7H-IFxAOhx47t9lcwZWfRqCqY5DlCVy9EsLyUuuxnoFn48QP0RrC9WuPNQfI5SuoahoSCRaKOIGEnEJMyW86d3V1FcvLy5BiOYiCCFlUIAssxEgE4zdl+m7F+M2m8efmV-DrqAQlnkRMjUPkU1AFGTExDImTcPlSCI1Gc1NjUCg0IIlxcKwESRLASyJYiUNEGMNv4U3VARrTC6jXdagK8aMKRIkHZ5gsgaU6YKUo4vEs5WDj2bdvg2KeQLWWh6LI5D-FXxQpBqQDWYYSY3FjdBhez7lN8V0gvYnSGPSpDNVdDAKXoveCyZfoHLLCgmXH0dlhx9D5SxvOr1Y1VLQktBppTklC5NLE54jPkw6Jb+6jONveDrejd+Nqjl7XR8aImcZCs476VBlxtUh9JwtRDhM3CoVTqAaIz-0On9uKwT4fJkuFDTtDPFVAsaiR9jTKv0Y6yEDgKf9SxPRb5iWolAcuOoFzg-04feo4fB7nhrDZqIpCsYTpRp1yUEWtRvqPyaQHztSEJBl7QwcSolEWA4OD6OjsgsPhQr5Q+hd6X8X09AxiVE+TlTzquk7smmmqqprMv7j3+VEMDAzA5XLh2LHjCPQFH5m-0lrFz1d5FMt5NOZL0LTqP-JZlkUwGITD7kBXVyc8XhtujIyj1bq9bv6tP1aJ1URtqoRyLU3zprYmfn9-PyyWbni9bpxpP4ozp62PVu9yBukcxX26jLJWNPO+Hr6bcuC0dcDa7aC8qOtiLy4uIirGUNIKVG+G5kl7a4z-Hb7F1EAP48XJE6epJ62rH2BsLITR0DDlvI5adQZ6fZr22tr53eS-2wmP04YeTy++OHICw8M31pb3Vov8LZv9tJinmFfnzNhr1bXzu4nvcjnhslrAOH04+uVJfPfd92vzPRTBtV+uoFjKopAz+LMmc918p5N6oQN+dy862m0YGvqaZmPqYbMRrZUW9c06+R6lmSahXJyDXiP-9crd3vNgvjEHjRnIcdx9-bld8HucxA+A8QRw7MRRML7AQ30fHQljfDyCdFY2-69SahKf-NcnH8o3TFEU8Dx-j2-En3HZ4XX00EwOoMtyBhaqh3gy-YB7HSDRf6pKlnyIguVHaZ9Apbhi+q+b-NrdGtTvzF-qvbzJl01TFBWcyQ8S33qPzzj74XEF4fXZ8Pnxw2ACfQ-0-Ycfh0n3E0imVETYmxRTBeXJGfK9bt45NK1izmDDYqpC84enM-DmHUwSeZpDFA+e+l9-gPjU+9yG7zZ47Axcdh-lwwKH6xSs9k5c-OayMVjv99rlFm4tAOVSBYlkxtRJMpnEVKOKmXmdZo+O2ZlZzM3Okc0ik87QGVSk6B6aSiTM57BMKkkxk3Fh6Cvqvzb4GQa9TA9pwIteL4MA7YN+0mb7Wbjt-r8-SwjkjxCmOaMhW9CRyZdRnKxgfnEJ80sLtDbp7ruEuYVlzNOzT65QRjKdQyZXRDpToJjlkM2XkKD1-NBFWB1uincAPrKe3j74-QGyPtMYJgAP48ZEZOIe-8K3AWx7+2nsPbAT7xzcg32Hd5PtwodH9uPAZ3tx8Mi7OPDJXfv0Pez-eBf2HdpJ61vY9xHZoV14--Aest3Yuv0FvPj6M3hp2-PY+sZzeO3NLXhlu7F-Fi-TZ6-u2IInn3oCez7YYbLR1vYn";
var raw_stab_left = "5ZdZbxtVFMfzQXjmCyAhFiEhJAoSoLaqaEuLCq3gIWXpE4gKhLqoVZsmcbxviZ04aUmhogJVIFoKTZqakMSeGc-mfY89XmInTpzELvGf43GaCkWQtCThgYe-zp2rufd3zrln7r3TBqDtfySg0bKTnkkcfn-fjvOvfXMDZn0vLDYznnzqiW3nNVbjDYQisDn7odV3oafjEmw2J17b9+K28wOBMGx2JzS6Tnx+5gQMpvNw9Q6gt7cfr+x5ftu4IyN3cf369xge-hqnz55Ct+YirHYdzGYNnLY+lb9r97NbxqvXV1Tr9cro6nTgi5NncerLc+js0MFmccJKsphcMOntcFhtxHfi1b1bFj-ujk7g4gUttD0GnDt7AX0WB2xGO3rNDhLxDX30PACLntgWK-oc-Xj9zX+9-kgk03D2u2Cx6nCx4xSMtM59NissRh1MWg3sZgPxjLCZ9KqsBh0clH871cSu3c89Nnc6nYSd5jUYTDh9+gy6u7tgtZphNplgIpnNRrIko5HaplabZDHr0WuzUS048fLm62-tOxq+8h3MBgeG+u24cP4MOru6VZ5Bb4BG07MqDTQ9PehZ1cN+LamL3tVBazDjpTee2YDZQLlcXf2OYlRDl6m29LjU0UF51eLy0AAGh4YwODgIl8uFgYGBDeSCa8CJq8Nf4crwNeza+8I-8peXa7jxnRu-TTFgBC-ujo2AYSYgUFtgfwfrnaR6Z0he6mf+VizLguM4sCQfx0CWRATDcbx34tB65lJdtX4pgYl7InEEeHzjYMRJSH4GokQSWPh5FrLAky-ChhJFEZIkkWQa60M0HEIskSb+4XX8WzfduHObQVAMg-d4iDNFsbNgxdY8As+D53hIrASRE+Dz+TYUzz-wszmeQyjoR4jiP-rhwTUu52MwNeUmxiQ4xg2Jn4RIfbJPBEdxsgJH4-lVcRSHV82DOucmcrDGp-jDwSAi0SSOfnRgja-6FPRBlsdJbgSDlGdeoljD6hiemM04eLXNghenyHooPn5TOWiKUy2HcCCEaDyFYx8fWJf-mz+NUvwB5BQFPM3tlwNgGYFqTSIbgI+ldWEj9E6Maomefeym+aqvVIN+WUYo0sz--nX8arWm2ngiC8Efh0S+CnyAajZA9SNSbvzUDiEgp2ieKGR-s0-epPw0RkI0EkU8maH4D27w-S3j1zEByWQZxWIBuXwChZkolHwYxZkMPSvI5wuk-CZFc+QUVObmMF+tof3TdzfcfyrzrXyUSwvke5DWfBxZJYSFapF8Umi+3GPwK6gsLKP9k3ceac9fWYG6hs05ZCmCVEpBqUx+FApQlBzVzCqD2grVj5JrqeljS3nqz2Judo7iWnpU-l98uTM6jkA4iWQqjelsAuX5NDL5CDJKitaliEKx9HBtClnSNAqk5hqWygXML1Zx-OTj8xtoqJah+4afzoZUJoH8TBrFUoZqg+oiN0uqkOZQyFdILZsvFDE7T-ylBbR-dmRL7h6l0ix+vsVRrFVE4gmklSTluYhUooBkvIBMqoJsuopsqobM9CxmyjmKfwkfnDy2JfyVlQZq9Qbu-9GAT4zCy-sx5h5Rz4pUOkZ7amvvliWqX9rTQqEQUtNZHD1xcFvunouLixgfd9NaZ3D7l5vkhxeRmAiGG4OHuafeiaOJDPEPbevd+369jnG3h+5KRUxMeOgc9tK5IyMYiiKWLODt44d35J+nXqtjbHSK8h+jvEwik87SN6PgSPv+Hf33EmgP-uHHEdxfaO4jU9jz1tM7yn9wh6wt1+kslHD1W+d--z-c1vYn";
var raw_stab_right = "xVdbb1RVFO4P8dk-YGLUxoSYiCZqgBABwYASfQAvPGkkGsMlEChtp3M9c2unMy1YlEgwRCOI0lLG2nbmXObMmft9OnNmzmmn7XTaziDzueY0oglYSm3Lw5e9z2Wvb31rr7323m0A2p4icPl7F3hBQn25oT03m1vLv-Od5yEIk7i3APz40zDEUGhL+Q8e2YOpooxCvoixsQmEpBRGRybRqDe2hP-doweQyiqIxpKIxUPgOD-Gx32YyqsY8-pwr7GpfuD9Y-uRzBQQicThY++C5UeRSAURlPy49esNlMoFiosXi4uLm8S-D7mpImKxGAIBieIfRTBI-EERuXyK-GAx6h2GPxCGEEzi3p9N1BtN3L-f3BD+j44fRnVxCdOVEgpTsyjm6ijmayjk5pFNK8hlFMiyirycRSKdQblcwy83eczMzG4I-5EvDqK6tIDZqoKyokIpzxPmtLZcmiO02lmo0zLUmQLK03nkChmEIymw-tDKmsW6Y4Gjxw+R-hpmKgrNdQaKMkV+tFAkrWWCAkWdoW8qCnIOhXIClWqe1kwG2VwekXgWt0fG1q--s0OYry5hbnaO4lxEqVQmlDTIJXkFsoySXNJ8Kcllei5BVRTyWUUuJ1POJOh-mepIgPJiHfwLy5ifm9dstDhWdD8eLR9VVcZCTUVRpvwVxxAORVGZWdBsz1frVE+bq-N--h6qtTrxzz0xvxaPMuXFdAFyOQ5lOqnNoaoqyGYr+G1UxPLy8qr8hz-dh3S2gGQiSb7T+guFCaG1IRykMUlEQjmag5g2VpKC1I9ADEQgRWIQw2mkM0WNq1arP7z+P96DWCJNdkIQeF6bQ0EQ1giOxkTAsykEuAQELg6OjYDzS9SKZDOCANkrUf7w9P7GzyOP0L8XyXQOcfJVEHjaC4Un4A-QnPsQCE5SyxEEqmGtdzzEVp+PI0g1LRplKTZewhhiUYEQ-kf-J3uRSGYRj0a1MaIYJIhrBNVJ4g2Kfuq3OAMaOOrz1IYE+i6wkAITpN9LNXUCk5Ne0sj+K-77aN9Jt3yiOeMf8Ld0rCUGQV6ExEmklbhpTKt2c1S7WfIrHKC4+HyIBuO4fYvFzRveh+L-wTHa-zJ5JOMx0iFQ-oQIkmZnLTEIkc5wgFuJA+0VUpgFSzp9whhETsT4XcpRKaNxLS81HsG-H1HSH6K8FXgWHOUgT+A4DizL-if8fj+B-vdPEM8f5Iuf3o-jzugwaffj90kW1695af3VV11-23e9jEtDV3B56Bt43C643R6Ce1V4PB4MDAxgYHAQFwfdcDB6XOjoQFenETbrRdrLU5rtSqX22PrzylsvQG9iYDIaoNN1EfSEHg09PSvQtaDTPXhvMppgsVjQ2dWNc2dPYbDfAcbUh6FL1570DIlXd7bD5nDBabfDyhjJrlkDw1hgMf-dN2t8DMFmY9Dd3YWTJ0-BZLLAYTXTWSm77v1n+46X4CD+PnsvbCYD7BajBifZdTCkU6+D1WxAr90Gs6ET5ztOwGozwNXvQSab-9-7-5tvb0NvXz-x2WA12mE3u8mPXjgZignTR88O9Fr7cOb0Oeh7TDh-To87I+Mbdv56fVc7nE7Sb7PDYnTAavFQDrlgJ3R2GHDi6zP46vhpyq0+yveV80ajcX-D+LfveJH4++Gi+DOMjnLBgG7deZw8fQJDQ9-i6tUfMDx8Z9POv6-tbNf4PU43TJaz+PLUMehonu2UE3Qm3vTz-xu7t8Fud6Gn4wL0xi7YXf2IxBJbdRfDs889A6udAWN04sp317f8-nngw92Y8E1ofTSf6l34qdy-0db2F9b2";
var raw_stab_down = "3Zf9b1NlFMf5Q-zZf8DEqMSEmIgmaoQQAcWgEP0BfOEnjURjeAkExraua9e3de3WDRxKJBqiEUTZGHVua+97b9-f197b272v21qkX08fsEAU2ciGiU1On+e2t-18z3nOc85zN4Fee97fgSefegKv7NiCl7ZtxtbXn8XL2zfj1Te20Pw5vEifvfDaM9i6-Xm8d+gtsj3Y9+Fu7PtoF-Z-vIvmO2ncjQOfvosDn7zD7OBhGj-biw8O78e+Q3Qv-e7tg3uw98BObHvzaZz-1ruJ0A3DeGAcDpcdLpcXbnfvHfOix9OL7m4vnGRmqx3nBi8gGk8jlckjRmMimUUynUMskUY6W8BCpYr5xRXMLyxjYamCheVFGpeRmywimSkglTUwWdQgihMQxNBffKbBbnGjo+UMfO4+eF098DhdcDuc8NDc7XLBaunE+cGvoIYUJOMxxKJhxKNRxCMxhFUVyUQS83NzZPOYm53D9IyB2QUDUzM6YrEYIpE4orEkCvkibi4C1ZVak406cOGbSzBb2mC1nYTdboLN0g2HxQWntRMOuwUmUxt8fV6IAgdFFiFLAmQaRVGgzwTSEIKua8w0rQi9lEHJKKMwOQtJCiHA3aCYqRgdHccPPw7d63tTh8vbi8+PHaJ4E9Pmg6urDy6bBTZbF-HN6OvzgSdWKKQSW2EmiA0NElQ1jFLJYKbrJRjGJIzSPIq5KsUsCk4YAc8HaZ6CTPGq1--Oj8QSMHW2ot10Gk4Hrbu15x5+B-H7IDB+iNgyM5HxReKrxC4x03WdfG-w51DMV6AoChIpBWNjAYwMT-yT73djQLl29PgRuIjvtpM5umg9bE0+z-Ps-yRJegi-yPwv5ObpfhlKKIjJfBm1au2BbIoJy5PBwa-R2tJJfA+67VbYurrQ0XGbz3Fck-sgvkY5wOb6HLJpA7l8Cld-uYxRf+DffG-quHjxexz58gStfzdsZhOL-9r5lAv6PHIZg3znKB8LuFmrrYo-NHQdXxw+jh6HB46uToo-rf9a+JoGozxN-FmalzHiH6K896+G3dTQ1urBieOn0ONykv+N9Tetmq9rOvlbRnlKQ17LIiiFsbS0tCZ+MKjC3GFFF+0Hu+1u-q2G34h9QcuhPF1AIp2BqCTXwm5qOH3KjNMtR+B02tfE17USCqUESlN5uq7g5h-1NbNrtVu4PjwGh7MT7e1UFy1W+Hy+Va6-jpmFPHKFDH6+IqBaqz+K-0yHt9eHo0ePsRzo7++ndQk+lF82Gn0mg3AkhenpWdy69ej8TDYPq9WG1rZ29A8MEP9e-xVWe0WRhxpW7tRenXpPGdlcHlxQfVTufRq6qQaeOnkMZweo-gXHocoSFIFqmsxDkgPUfyLUf5KU8xrKZQ25nIZIPLsebMafzGcx0NtNtdAMmf8dYYlHiA8RPwhJoV7OpRBRKd+nClislKnHJHBteJTaan3dNNitHpxpaaGYB2-7LTTqv0D+05xPEDMGrRRHUYs1evB6cZv8wXPfUU2yUP6PsXoqs-4jEZ-yj4+z-mtMJel6tJET681nGpyOs7g+MoRQmGM9kPFJB89FqCcr7MwRVqOU7+vPvt0bU+Ao-pwyDp56Ks-iL1BOhij+Eco9AzPTixvhe1PHbxMcAuIo6eAhyBI7g-EcnUWkCLLZmQ1lz8xUcOk7P+0BmfbABFSRziFCnGJO8adz6K8jMp19qxvGr9MirKxUMXaDuIEAFJHygM6WEtUgOZym71Ya92xkDJiOcCiDqBJHSBpHNEpnC+r36Uxxo7n3abh2laO646d956cx8ljZK8s1XLnspz1ItVgdxeWfhlGpVB+nBqZjYsJPz0Hi4+Y2+QLlHz2H-Vf8-4PR+6Y-AaY-";
var raw_block = "VZf3U5Rptseb0IQGupumgYZuaJqco3SkSZIUQdHBsOoEZ8YxAJJFgoAECSLI4JjG2RUkIxhmdHR2d1LV1tStulX3h-v7-VM+93Rrbc3+8K3ned9+nhO-55y3ScywU3PMxf7Dpdj2OyivP8D+o0dwN+yn5Eg5pXUVVNbXUtq4H9fh-bgby6lqKBPsp6yhAfdBOd9UT9tAD3UnGrDXOOV+naylVDZV0T3eTcPZBhx1ZdirXZRUuSmrPYOtxo29toRsh4VH33-C6KMyTnRaONOTxuEWE9Vf6Bn6aw3931hpag3lUEeYIJSmLjUTy8V8OhDL0P0mPh3M4dAFA4u7p1n55TLnhnM4eEFLc6+WczdiefJ7M+fG4qi7GMxnw0a+HEqiuSWNMwPRnO7NJtutZvn3A-Q8sNB1z8LHY2GUfK7AfV5B-1oy998dobEtDPeXCmraA6jvCWZs1UVTZzB932VydiyUolMK6tsV3Hlj5+SIEscZBb33i-lq1szEpovGrgDspxVM71RxczOPuhYFXX9TMvQknfxSPbPbJXwxE0-PwyzOz5mo6fCl9WECU69LaF1KpabVn-N3U2hdzuXSw1RGNotp6gui40EaTf0aqtuUNPb5c-amhhOjgRzs9KPzYS7n5+PpX8nj5GgY9d1KBlaKOTtqEnvUDGyrGd1IIq8kntN90ZRd9KX7cS4ju4W0PI5h8FkOfZsFXHqs5sJjJYNv4uh-G0fHMy09O0F0r0VwfVO40+XPp7ci6VtN59I9o-iVyo2XqfRtael8GiQIoHM1mIkf42h-oqWqTeyW2Ey8MjO0kiaccTH6uJQv74Yz9jKH6y-i6NkOp28viitrero3TUz8PZveV-Fc2YumZSeCSysqRn+wiMwc2p7o6XgayeBzEz1bYsdOJLd-KWBwN4Gu9XC5r6F-N4qF34vpf2bi4rf+DG5nMPmjmf7vcmg+nMOd360Mvkqi-4WBrg0tA3tpTLwrpnfHyOVlFSNvkri6k8aN1zb6n2fKOw2dG2qubmkY2DVwbcvI6MsUrm7GSFzC6VjT0Po0XH5PZvyNg97NdDrX4+je1jH0QzR9YsfgGxU9TzI5cTCVxf8q4NrLNC49kdhs6Ln+vJD+nXyRE0P7RqC8C6NrzczNtw7Rl07rSoi8C6ZrM0zkhtMr+ife5NC7YaL9qV7ipqLlaQjdG4mM-WAX-Wm0SOx7dzVM-JQuPsbQtiUcFP6daMxi8Y9irr-OEp-CBXqGJQ89G8m0iy9dwpO2p6J-3cTkuwIGnieL-jA6tkLofCZ2SJ67tqO59lzivW2g3ZN3D9b1XHuWLHckjtuJIksn-ku8nsfJbwY6d33ofpIh+jNZ+FcRM7-ZGXplFF1yZi+dq9tJ7-3eUnv1dW-FMPlTNv17ZtpWNKI3VLgYTIfIbFvX0bFpoOdZDF07st+IEN8NjL3JYuafRRKnGImJWs6E0r4e4fW-a8+HnuUMjov+xT+sTP8qeRLuXFmVvG4neHnXuaXy5vnKarg3Nj3bkbKKH5t6kSl61iQOEqOWv+loXxGf1qLlOUJyEC17yd1qlNgtMVnTen3p2AjxyupYlXM7Cq-+Mw1Z3PpN8r2bL+dDRa5a7holRiJjx0fsljivR4qMUFqWxd9NLW2S9-YNFX1P1QzvxUnNpEpckhl8mcz1l2bad2K4uBElsRM9qxquSL10yJ02D2dWI+kQeW17CtqXUzh2NIvxt0lcErvaxN72dbF5N4KB13p6hC9ta8FcXg2kZT2I1jWl8Er6yI6BqR8zuSr5HXuRx+3vnczt2bntwQsbI+s5DG5mMib5at-V0botXFwPpWddxaXNEJEh8dsOYHi1iP2n5P67XDrfKIWTRq69yuHzhwaaBiW-j-IY+9HCyE-xjP6UydQvSUy-tXBhKoG24UIeLdcx3JnAUHMIc80R3DoexWRzJGOnonkwU8j8Xh4X9sI4t+cnOQnk6koA7W80Uv95zCzHcXvJyfn2o7z8nw4WfpXe-HcD4y8LSC9JRKFQUHfUyOKzCsY3DzG1+xFzrw6x9MMhDA4Vfn4KvqtN5rfzLv7ZnM+vR3P4+UQePzfn8uJMKqu96Tx5nM-kyyRaJQb9-0jkxs9p3PtHFVvvvmBzs4ypwXxsdunT7eWcbrVxqjMSU65CdCtJ0lpIVPqi1fuiMQShjgpEE68k0hyASuNPsMKffQofhutc3D1Vz62mUiaPORg5KTk4YmO0Np2vms181p3C7dcnpddUc-FrJ2cuFPHVxzV0n5Pe2VyAnyKAQPE1VBCsCBbdPoTL-t7lk0wfrMFH4eeNhULOBQiCZB8juuN9tagUgQJfQuSdR4afr5wLUHifPTJ8BUGBvhyss6ILC-wg5-3Z8A+IUulJlzvFojdDEUmaMogUfwVzJwv43+ufYTPFeO-o-KMwBQaTpZKzSh+siiCsyhAKfJRky91MP18y5Z4H8cEBGFWhJAWFkOITQKLczxE-smTNUPrL+XCyfH1IDAjAkVNIb3UB0-vi6a1V0t0USZVBz+3aWv5vpJpis9KrP9I-CKOsH2WEMV0jebVlMOqKpcduotVqosMhPcNuodcqfdART6c9nmv7ErixL5Fxq5nrTguDLgMTjmjGC4sYcSZx3pmGM6uE-jon406p38oYhmuSOBAeRr-dyvdf1ZETG4bCR4E6RIFR1k-SY5g7kMVAaRpdpfnMlCfwdUU0sxVxTFQlezFfHsOSS8ODcuGzQ+a2K5vr7nTG3TH0lyQwbLMzWpbAlYpktAoNZvHLg4QPa+IHePbaDzlTSFzVsub6+JIje7PkukjiP5QTyeMSPbds0YyJrkmniZF9Ydyvi+Xx0QyKAzx2+5Ll70OR3ElSvEeqR5-4k6WOpdaiw5kQhcsciUvWssRoSixR2OW5zmKgPCEaa4qR8vQkMlVhwi8-goULySKjuyCKJXckMw6pfYn7tFV8tunY-sLBwzMOEsRWpZ8fKqklg+z3x+s4YEqiKl6LNSGShhwrtz6yMVmXy8SBfMYFY3V53BCM1RexVJ3FnMR0tDGXqRMVHEk0evmtClUJv2Q2W2NZKo9iVvRPOUzMWWVfoOXFWQePTpR6uazyDyFAeJqlVTB6IJlbjbWMNabRfjiP6rRc7kgfub9PzR2rnsU-wfP8oFDDoj2Um65Q5kqjmShNoTI2iAjpP-HC8Q6bmcXyaGacUcItIzP2CBby1bw9bmP5WJnUlA+RUis5YeG07oviTkUos7YEJktC6KqI4VBKGgs1cczZNRLDiP-ArF3HtN3IuCuGsRIdMzYtS5WpDJSlk6L0w+wn86rYzB3Rf9MVzQ05d9Mp3xi2UJ59bOXhCac3R8kB8l0jXL1b6+FlINP5ZiZdMtsrTRxOTuJWbTwj4tuI2-CfkHejLplp0o9HyoTjdj0LzgT5LYOsICUmP5nP+yzik9SVO8J7ftyt44bEa+2zYhb-4iLew2VVINcqxc-SYMlRCLPFFqaEMx3l6dSlpTIn+m-b9F4O-RnTUqt3ivXM28KZc4Rxr1jNPaeZAUcKicE+6MSGy0Upck5mjsOPUWcIozYDC9khvJOZ8O3JCkyiPzYwkO6yFGbdGrExgjs2NV9bI+hxFHIwVd7XJnLTHic9IP49HO8x5uGzvL-plG8fV5TYaGC+JIP20jzigqUGg-0YKMlmqSSWxTK1+KfjriuBbwq1vD6ezaPjTuI8dRag5Jo7joUSNUPuJMl-nMTSSIvkpD5Fvj+k50w7RIfTKDVkFH2mf2NanidF-4RL-qfYIpl3pdNTWUSC6E8Ubi9-0sgfbUf45XKVoIb-Pn+M3z6v4V-dDaycq-L2FIu-L0PCjSWnfEu7jVIjBuZsJi6XyvxPKmRW9C9ahd9St3PCuXnh3r8heZl1hjMr-F+0enpaIpcLYknw8-ilYLC8mAeH3cxIvU7XFHK3ws58jZX5JrvkPOt9-oP8vX1vwRXMdLmS+3YV31g9vVv+i+bYmT1WID0kltvlZi8WKi1-QjIzVRbJUTz3a5Lpz46kSPyOCfTBGKr0zgRPjHUCjSBaYPwAg2duyJxJ1sk3elUR8wfimDoQwX3h67dlGVJHVViMJo5k6DgWpeZIjOY9YrUfIHujjnpzuEDDKYueIh+ZzzLTQsJ1aEI06H0D0Upv8QmUORUaiK9wLcQnkAiZ0RFKJTp1OLqQCKpNEfzFHEa1yDoeHcaZaPkvZo76f476";
var raw_block_solid = "jVdZV1vnFZUECASSkJDQeDUgxCSBhAHNA0IgDBiChwzOcmIDnidct7Fjpx4KRgjE6KGZjR3HyWqDY8dDkpV2Na9961P-z+6+FzmJHT-0Ya9zr+7Vd74zfGfvi74GO2IaDULmGkTMGkQtWoRN6l8QMWkRq9ciUa9GzFSL1toaGKqqUa8xok2hgV1WDq1SgZoaBTSqSuiVWljkWjhkatjlOpjK+U6NEj5rJTqFcoTpJ27ScS2ttF7EY4RJJoNAWAgrYfuNtZWeiRDfqxffU6lhqTGgSV4JL+8biGaihWiUyWnLEJQp0MbrxtJzcW2DYms9Rwl2YnKvF7taHDi6rQXTySBORPw4HvbhZLQdJ2PtmI6042zYj1NRP87kujDqqUerXAZ3WRlM6nIM+RpworMV0y0unPa5MBXw4O1uF97qsWNfwIkDbR4c8rdgqr0ZBwJeTAQ9mAyIaJRw-rwLczErvtrdhR+O5fD4YAbfHx3As8P9tIP4x6E+PDsax4+HY-jP2b04lQxAW4pj1K3GzHAAq9k2fNzXhFvZBqzlXFgcdGN+sAnFgWasZFuxnvXhep8fqxkflvpbsDzYjOVcE1YHvJieNmCuTYl7gwJ+PNCDn6Yi+GkyjPtjHtwdcuJ+zomPR434YkiHfw33YF+HF7JyGZIWPS53m1FMC1gMmbEaMRK1WI2psCLakA3LYTOWIyYsEcVIvWQLMTPyCRPm4wYsxvT4wxkLrrRVY2O7Gz8cTODROz24M+rFclSHhVANij0mXE7o+T8Vbkdc2N1ghLZMhoPdzShmm3Atacd81IZi1IylmBFLcT3XNWIxaidsv0M+bsNc0so9mFGI1+PMaTOu+tW4PdSA7w8l8dcBAfkeNQphDd-XoBgScCnN-yW1+DzegJ3uOhhZ-xMBN1b7PJin-2sxCxbiFvqt3-IdM73S96v8nzxeh5mABhs7vKx9HOt9FsyF6D+mw2K8Fkv0fzVNHyktPk03YrzBACNrf7rdhetpJ-MormXFXMKCea65EDfTD23E+kq87P-0yVrMBtT4bMSDR1NRfP12EDcG7Hym49qsY7cVs3x3NqXGR2kPRhoNqKX-U+2N+Cgp0F89ZpMWzBDXEmIeWIuI7f-2P31Ki8sBFe6MN+PpEdafvXdvTyuWU3rMhVW43sl6RjSYjynxYdqNYfrXSvlvwicJG2tuYA+YMZMS-VvZB1b2Gf1HXw0pX0kxVybu1YhTZy08vxW4M+zGk0MxPGH-P5sIYXN3EzbH3XiwswGPxu14PObCt+9meYY90iya7BJwK7XV94usfyFmx0KM+xFzH+VeeD-H+xfBvIq9wR4pMvYi937mlAtn2itwu9+C7w7F8eBwBt+dHMWT6V14fHoc3xJPTw3jp+ND+OelYziSCEkz8EDQhDWe90JMwFzcSbgJl3Sdp5959sE8e-JlzMUduCa+k3DwPRsunnBIPf-93jZsHkxj0m9F2laHXrcNKacVUacNaaEeOf6WaxAQqNPBwfwf63GimPEwJoHrinFZWSPGGLdLORbjW3yO2BaKjHte3G-MjXxU7B0BNy824sGbzfh5MoSvp3IIVqsgY3y-QiHZitK9kvCSb67tjGJjd5BnVcsZocJaqJIzR4WlMM9ORI98mL7CBgkF1khClLUK12GpR4-lHh2Wu7XYONeGZ-uDnHtxfH1iF7bV15X8lkFOKBRqlMurUMXfysgnyrIqCMoKvNHMmbbdh893BXB3hwv3R6y4NyLwHDfiszEfPhkP4tPxgIRPXnuOIDZGW-AF35Ew4sZtztynb4bw7N0u3D0yim6rQfJfSX5RMc8q2hq5HOpS-IqqWtjVarh4HdFWY-H1LDaPDWFzIorNA0ncmRrCvalBPJzoxeZkRsI3vBaxSdyfyODuRJo2hfv74xhgXccMGrxmKEe-ox5ClRo1XHv-cC9G-C4oxL2Q41XMRXWVElqtDuYKJRrIQVo+82u1yDlM6LNq2Td6xG0W9DKGIXOVhGFzJUYtKuywqjBqrULWXouUUIeMoEeG1+IsMxPuEtc75OXw0K7s244HRzLwa6oYdwXU5eUwU0c0ayvgV8oQIBrUil-43cQ+qSWsJV43lexzrhd+oyWcJYjXZxJO-JEz6ULYRJ4X8D65dNxYjUsRN-57aQfGm8xS3s3kPAd5Z8ilw4VeH96LeHAy5cT7YSeudLtpeY55-s6Toy7wbLwXcuIc7blQA-4U9hCNOBtqwvmoExd5Ti7wjF4gR10aC+LyqA8zQ15cHmpHfk8CO+06-DkVwL8-OICs17blv0wu1XxPswXFXWnMDW7D5eFGLPe78SHn8Hov516-DWsZO26lxXvyMve30O9DfqATc0Se+iU-6Ed+eystf2f-RlxmwoiYQ48o6x9zCWhlf6UdLrwe6ISg0bP-y6njlHAq5OjRq1lvM7KsddKqxHQnfTLuQrSeHFDPs839RcwSB66OdmG-34EU+6vfpMeAWYcUkbYb0cuZkrYZYBB1GWEsaTvRCvIyyYp9aJcr4Gbt3aU6O0taro79V0f7dpMVq71tKJCH-8J5PMt6zvHs36Ce+PL4TvSyv8U+tXH-ltL65tIaYo8c7hB1mBcHqGsmyOkHgy4c3Ebd1uXEOz0uHN7mlrj+CPnuWE8Hsk4LTKxFXbUcFvbERJuA6wnWIcqZk9Rz9tlQ6K7BnV12-G16FFmHTvJprayAUanEGPd7PNSICa470enGzayAG1knZ3kj4cY667nG+-UB6oscn-e5caPXixXqt-WcWLsW6vRKVLEXLZVK7lng+w4UEgaJg2eZh7kuFTY4jx6eHMaAwByzfmK8QzyHa9u9uDngwWq-B2vEarQGK1EteYv6jPNxy4pabQtrYc5K1rMQdfDegBvkqYkuE6xqxqOoxLsBO1ZynOnk4KtJF-2TX7qqcXfEicecSyJv6Dg3e3RanOs04MMMdSHXX46aJBSp10QeXOSZWCSHvAhqCWrEAnlazOtK1MD96nG1v5nfJuLsKMNkhx03+x3kGZPEbQUR21S4N2zFU+rpIc4lHWPf29mCInO7SD5YkDh6C+LaC5Jee5VetEsabD6hl7jzOnNxM6JDIeNFXKdmvyrIlzZc7xX1jhHXwuRBIt+hxMagCU+PZjFi02z1aQdz3WdnzIZSbBYJog4S114Ii2u8DNE-fbO2Yvzr5K5b3EM+1cjZXwM9150KOKjtBYnb8jHGzj3Pd2uooRvw8FAWOfOW-30d-DYQZ0S07gX-11KiJqUfzr6FyMtwUE9Rs4vaIebCKmfkOntgJtOK7rpaiZPe6++gZori-usduEMe+-KNbfhqjx+P9kfw6PgODFh10vl7i3ptifvc8v9rrUXNmKdeWAy-Si-apB4sUk8VOFeXQhasJARcGQhSh2il+XBlTwY-X3oLD6mR-n56J3v+NTw5MUztNIZvzuzFgMMi6VUx-0t97OGo2G-sO0mPUJcwvgVa8XvkZeSJBfGbgrkVZ9oCczCbDeINn4BmpRxNijL0ejzIdXciHWhHpqOd34NBDPp8yPGbMBtsR4teJ3HUUZ+V+ffQXy3zqSG0EmbirbiaaMHl5O9xhfgg3YKLvU38BmnGlWwA+-xOfntynnD2eGvUqH5BK4kaRSZx9vN7fVkFuVqBd9rdmM0FcSVFnkl6iMYtyGT-A2T-";
var raw_player = "jZVZTJRXFMc-Zx9mcViEgRlnicyIUpCGALWIC7jw0BqDQQVFBURqy5JgKwoVKLVqgxCMS0VqLS-UBWxVaGuqYxptY1MLbn1o2oemiU37ZCPEMmy-XgYyVQHh4Z-vnnv+53-vPd+550qA9ByInTcPSZLQKdTolQqMCjmBciUhcjUzpBlYzBH09Q9IE8ROBgYFXomOIkYtsdwZxiqnkZWOANLtJtbOd7JijgOtQkF8YiI9vb3T0vQODrF4yVISQhXkuNVsiwlim0vHG9EGcoW9xaUlP9pCeuRs33li4xYwNA3df-sHfPykWUoedtbxz80m-u5o4NHNFn5pO0BOpJoNEUoKXrKwQC9Dr9GKvQxPqTs0PIxeZ8RqUPHwh1aqtq-l3qWjFG9eT1-XF2Ktg2TF6MmxatjoCkWSyVmcupLhoaEptbu777E0JZGvmypYFu3gclMxsXYzPZ7j8Ecr6+abyAySfDmK1UoYlCr6+vqnleeVy1K421LBk+6L8NvH9N44Br93wl9XuH+yhjyXiawoE2kmGTZzKN6BKWuDR4+fkJq2kPtttVTt2EZGWjIlGemsWrSITauT8d47RemSlzGrVVjDjFz78ftp19q6ten86Wnw-cOncfbDQpGLi7gdFp9dEZMwqUZubi5bt24hPz+fgu2FZOfkYg6dRd7ryXR9eYzbVw7huVDFz1frYOAGe3My-OtkGgO4XV46oe7ze3oae0syadidTXFWKmWb0ti42u2b15g3ojVnirGGOGFfr3xnnO7ZM2c4f76N1tZWwkKCJ9CP5nRtHidr3xRjq4CKMFMhbtvnaIMLxL2WqBf4rrp60pwkJyXSeqSKU-tKxjRNzJ57hNMN1zja0InD1oHWtAat8GlnxiNpKgWniHRJywkx923d-nGaj3t6kUlKjr1bIKxfufFZJSFGJzr9yP87IfABRls7EVGXkIwphAYFcfnTqxzcfd63h1MCzQLfNNaP066rP+zjZC+3s78sE2uwTZwzAZUmVfSa5ciUy1CoM5Bp1xBosPJTS5GI8tC0bwcbAnScFrFHBG7WNY7Tbmw8zua8t1i3PhtT2Ex0Thsm+xwCzW6C7PMxO8IJFr1OLR-Nf0t9hYh6QLzbxh5hfyWwa8TxgjoecatCFhC5qY652Y1EZtcQnLBK9GIFr2oMBEoyH6emLJ+4cDMHxPxhYRdOoftJczM6ca8kyYAkjxTf0XpxyXW8ppxFplqPdaxuggW2Cpwr3MGFPRUT6nk81znX1satW7eIcrt4r3oXb5cVsXNnKc2Nh1gYasKlkuMU+0uabaHjo6N0lpfTse-9CfWGRZ9sb29-pn5nGg10d3X5OV137mA0Gv3+8AgLdx-cf+G5+7xeP18loBgbqxVKP0epUo2+feKd04z5R+7GwOQ9DW9-P5bwcB9XO+P-OKfN7uc4HA7fXMDIemN+a0QEA4ODz2gJx38J";
var raw_rubber = "3Zd5UJRlHMeXADkEQQhEDkOQa1m8GBHBC1FYYBdWEylWBLkkBGJCVlDIFkFJMBtTwTzRJp2MQ0DJtGy8JgExr2k0b7MJlQU8AEX49nsfpQkP3GXEZvzjmXln33efz-f3-R3v8-IA8N6Sha8KNyJreT5a2h69cXZ4dCy8Jo9EhFQIUaAfMpfmovleyxthS0JCERkmBO6fAB6ewcHy1QgPFWKqrzcWy5dB0Xy-z9hBxI6LEgPNtfjz3B6crylG45WfSUsdDu1ZS374wdvHG+lLsnFHcbcP2IHErsENYv9xohSXTpbhYl0pXZdAceUn0nESR6sKEDnbn-mRmiGnvDx4DZ5LERdJcTd1Z-93XawrYzoaLj-RceyHQsREiCGW+GHT1iJ0dHT0ii2dG4V5c0U9sp-Vcb62GE3XDtK-byEwwBM8Hg9tbW0qs8PmRmN+jISubuLOpQMs3z2xu-Jx9XQ5OhuOY8OaJRhqa47E5CSV2SmyVKY7MGgatm3IQRNXZ0-r7gL53BO7-dYx5C1bgM8y4pEhi0TtyVMqsVPTZIxtL3CCkbkFNPQN4D1tIraTjvs3fnmSi7OV3XRw7GunK-Co-ihWfS4jdiKqfyxA5qfpvWLb8R3gPNIFziMEcBruDH0TU-QbMBC+fl7YsSUXLTcPA43VuH6GdFC+r5+twMO-j+KLXBlkKdG00+9YtCAcu8qqVGYP49szNsftWs4jBXB04aO-sQm0DI0QIJqK77fnEfMIoKgmPYewPCsZ6bJY0lWD4-sLMS8+Fp1KsmXpC1-KflaHg4APXaN3oTPQGNNn+OHwvs3Ip3wvXhiHZq7u204hOX4WdhaXK8VOW7xIKXZ3HS6wd3aCmo4+07FyeSrzv+Wvwziydw3i4mPwuOPV7PUbv2ZsSxtrqjc++E-z3dPij3AmD5xIryNMrKwQHByAzju-ov7CPvZeiI4Q4bvSyleyFQoFTCzMYGVjBaH-FLiOdYUx1ftQBzvm84vZAorbEVa2NvAResHG0Q67tq2gzWqAB79h4cchmCUNU8p3efZSFju3p8dEd8wJm4GP4kLh5jEGOpTfIXa23fLBPWdHMZtSzGH07Ljxbhg-aRyartJseHwOORlRcPUcj-rbileyGxsbKQZrWFhbsX0tKZ5hTg6QSiXIXpJE-Tsf7p5u1PuGsLAZCpdRw5nfBqaDkJwUgYT42aRdnfU60ICczCiMHueJhqZ7SsW+Ij+PxS6gfbti4-rL0GwwizH1kygUrc-G6vw0eExwB09DGzxtPSyTJ2NFTgqbBdxz3AxYuyoFrh7EblSO3draCkeqtUGWg5+rN85vbl9t6nHunjwzEfvL1kGekYDNBVnYsTmXasQcPE1drPsyAyVFcowhz1V432PDpo0s9p56TUD3bBztwdPSZd5zM1dx+QCrT26NchuNcKkvgj+cidsNzSrNWDePsTA0NVaq1ziN6noGKP5mJZIS5kBzgCH7TVtfCyJJIJruqnS+wLc7d5B3akqxuTVkmC2dZSZhS2EW+eHAZh9PjQc-sYjmS6dK7Pb2dtg62f3bc8rMOn2TQUhJjqTZOo-NXI4tmh7Yq7MMnYFQXFoC3wAh3tHWhJa+Lqv5l+ng5pzZe0PY+8yf3jec7l6yn9NSursMQrE-1HU4HTqsH57Vwc2DCZM9EBUZwtji18PupmN3RTn8g0TQ0O2Hfno6bK536eBmrDjIB2YWRpg4xbtPvysq9lSyetbsr0VLm+lg88hYD5KZ09-Yt9Xeqr0Iel-C8sJ5PvOD4P-l+5LzY0vRVt7b9M1Mhv4D";
var raw_player2 = "jZVZTJRXFMc-Zh9mcWAQBmYYZiIzIhS0MUAt4gIIPLTGQEBFURaR2ook2LpgBUqp2iAE41KRWsoLVQFbFdqaKqaRNja14NaHpn1omti0TzZCLPuvl5FMpBOUh3++u5z7O+eee+-5JECaRQyPjmG1hOEn+REkVxMgV2JUyNErFegUaiRJIm7RIuk5DB-m4NAQSxMS0CoUrFngIDvaSWaEiXSHPxlOI2nOEGLVEq-ERDE+R+aEUNySxZ54MiPDKY6xstWlpdCt5o0YA9tcOrbFBpIv+vHBClasXMXI+MQLuSPjk+g1WhbrZZS8ZGVDmJL8SDW-dB7mUV8bf3c38k9fMw976kmcr-T4-3d07LnMyYkJVqSkI8nkbHIFk2-TsDFWLxhHGO7-grIt67l3+QRV27N5+EM7NoMKvc7IxOTkc7nDw6MYlCritJJnrzmBErnRJvijncHeU8RFWLjSXMbqGAdfN1eyKjmBgYF7L87B2Bh2SzCpJhkbo0wUuUzcP1MDf12F33sYunkSfvuYJwOXuNtWSfrq5Dnfhes-fo8txIhFraJ85cuM3DvL5rVJZCxfzq6sTLJSk6jasY37nbWkpC7j0eMnc2ZXxsZ7zsPtsIocXOL8h6We-rP6s7eR3OzMOTNv7y0nx+jvXX8wPwvGbvLztXp6L1Zx++pR+r88SdHrSViC55OXX0jJ9lKKi4spKNhKYWGhD-PGgXdY4uFp0Fpy0Fg2edib1rqp2JxK2cYUGvflcXBXjk-8z2gG87vqahrEkJ+Q1lyC2-45Iaap-auEbJypfZPW2iLRjvFhhQSZaW9vp6Ojk-PnznmZ39Yf4vTU+5K0wm4nkuYA2nlL0U75MK3DYe-mRGMPrY3XCV94XNiYPLyzdbtoP15FUmKCz96-aWqgZcpm2veRfR1c+fQawYGBSMZkwqIuY7R3ibkPhE6j0zcSZHRy87MDYvWvnHy3BJmk5PHgkJfZV9-EccFqFdrgr6O5bocY7eWntp0EGGzItOtQqLOQKVeLGpSGSpMi8hSPzWznUEUOeWkRnljqG47NiHWPGPtKaL-QUrddjDygraHSY6uWS5hFzbI4QgmMiCbA4sYUsQCd044pZB656-PYUvQWTU2nfHJQKtYfEzosV7Ak1EJNRbGHGSDJeFVjEDVXgTk+g8i8GhbmNRG5uR5V0OL-n7kP9+L+Si6U7qBAmJmn82sTylHreU05H5dcN33mZiR5pPga0Il3+ElLy5zeQnfd+-Ts3Uv3RydIDLfiFHG6VHKWBZtoaTrK7t3lvF2xk-eq9xDldnHr1i0udHbS23tjTvy7D+4TGmb13kuj0Uj-nTve+YH+fuYZDTPubldXF5Oz10nGRC3zm7bVCOnEf22qrVSpvDZqxdM6rhBSPcMeHhmZnTs+ji0s7OldEPKfXuNwOLw2TnuE16-W76lfa2goI6OjM1hi4j9i";
var map1 = "`JcyxDcJQEANQ2xES+qGwKH91ugkQy9JGTBA2YDRM4u5Zll8GgQdZNlQi37c+gPqQ2p6rg3FC8G4sxW5td4ysVoDqwgVBH8njmDPMc+IxbZ3I0NPSf1b4prn+ALn+";
var map2 = "`TYwxCgAgDANPKrr2Kbo5+v9XWRsEAy1NcpQCdOfKYuJaMOUVTzUBjgSMB1SZJq6wY29PTACvMb0bmRmf-ACf";
var map3 = "`c2BgYGBUVAGRDEIMILAQynEAUgKMEA6zA4hkWAKUdQBxuETAHEZkDn4ZBjBnAQ+Qc4CZQ4CBYdGEBUAZhg3MAA3M";
var raw_bullet = "Qk2aAAAAAAAAADYAAAAoAAAABQAAAPv///8BACAAAAAAAGQAAADEDgAAxA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
var mainCanvas;
var GUICanvas;
var blackCurtain;
var INT_MAX = 2147483647;
var player;
var bmd_player = {};
var bmd_player2 = {};
var bmd_stab_up = {};
var bmd_stab_down = {};
var bmd_stab_left = {};
var bmd_stab_right = {};
var bmd_rubber = {};
var bmd_block = {};
var bmd_block_solid = {};
var map_array = [];
var blocks = [];
var stab = {};
var drag_models = [];
var g = {};
var mask = {};
var reborn_point = {};
var destination = {};
var transport = {};
var onPost = {};
var waitingForInput = false;
var copyTextField = {};
var alphaCanvas = {};
var allowCopy = false;
var c;
var hint;
var traps = [];
var takeRandomField;
var sound =  Player.createSound("btnover");
var width = Player.width;
var height = Player.height;
var XSIZE = 22;
var YSIZE = 15;

var EDIT_MODE = 1;
var PLAY_MODE = 0;
var CURRENT_MODE = {};
var MAP_TO_LOAD = "";
var GRAVITY_ORIGIN = 1.24;
var GRAVITY_FLOAT = 0.42;
var GRAVITY = GRAVITY_ORIGIN;
var JUMP_SPEED = -8;
var MAX_JUMP_POWER = 2;
var X_SPEED = 5;
var TYPE_EMPTY = 0;
var TYPE_BLOCK = 1;
var TYPE_BLOCK_SOLID = 2;
var TYPE_STAB_UP = 3;
var TYPE_STAB_DOWN = 4;
var TYPE_STAB_LEFT = 5;
var TYPE_STAB_RIGHT = 6;
var TYPE_PLAYER = 7;
var TYPE_DESTINATION = 8;
var TYPE_TRAP_UP = 9;
var TYPE_TRAP_DOWN = 10;
var TYPE_TRAP_LEFT = 11;
var TYPE_TRAP_RIGHT = 12;
var MAX_FALLING_SPEED = 25;
//↓New Bitmap Loader
var BASE64_CHARS2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function argb2rgba2(data) {
    var batch = [];
    batch.length = 4;
    for (var i = 0; i < data.length; i += 4) {

        batch[0] = data[i];
        batch[1] = data[i+1];
        batch[2] = data[i+2];
        batch[3] = data[i+3];

        var alpha = data[i+3];
        batch.unshift(alpha);
        batch.pop();
        data[i] = batch[0];
        data[i+1] = batch[1];
        data[i+2] = batch[2];
        data[i+3] = batch[3];
    }
    return data;
}

function extract2(data) {
    var bmd = Bitmap.createBitmapData(1, 1);
    var output = bmd.getPixels(bmd.rect);
    output.clear();
    var dataBuffer = [];
    dataBuffer.length = 4;
    var outputBuffer = [];
    outputBuffer.length = 3;
    var cnt = 0;
    for (var i = 0; i < data.length; i += 4) {
        for (var j = 0; j < 4 && i + j < data.length; j++) {
            dataBuffer[j] = BASE64_CHARS2.indexOf(data.charAt(i + j));
        }

        // attention, bgr to rgb convertion!
        outputBuffer[0] = (dataBuffer[0] << 2) + ((dataBuffer[1] & 0x30) >> 4);
        outputBuffer[1] = ((dataBuffer[1] & 0x0f) << 4) + ((dataBuffer[2] & 0x3c) >> 2);
        outputBuffer[2] = ((dataBuffer[2] & 0x03) << 6) + dataBuffer[3];
        for (var k = 0; k < outputBuffer.length; k++) {
            if (dataBuffer[k + 1] == 64) break;
            if (cnt >= 54) { // skip bmp header
                //if (cnt % 3 == 1) {
                //    output.writeByte(255); // add alpha channel
                //};
                output.writeByte(outputBuffer[k]);
            }
            cnt++;
        }
    }
    output = argb2rgba2(output);
    output.position = 0;
    return output;
}

function loadBitmapData2(width, height, raw) {
    var bmd = Bitmap.createBitmapData(width, height);
    //trace((extract(raw)).length);
    bmd.setPixels(bmd.rect, extract2(raw));
    return bmd;
}

function createBitmap2(bitmapData, lifeTime, scale, parent) {
    var bmp = Bitmap.createBitmap2({
        bitmapData: bitmapData,
        lifeTime: lifeTime,
        parent: parent,
        scale: scale
    });
    return bmp;
}
//↑ New Bitmap Loader
var tl = {};
tl.x = width / 2 - XSIZE * 16;
tl.y = height / 2 - YSIZE * 16;
var br = {};
br.x = width / 2 + XSIZE * 16;
br.y = height / 2 + YSIZE * 16;

var player_bytes = "";

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


function createByteArray() {
    var byteArray = $G._get('byteArray');
    if (!byteArray) {
        var bitmapData = Bitmap.createBitmapData(1, 1);
        byteArray = bitmapData.getPixels(bitmapData.rect);
        byteArray.position = 0;
        byteArray.length = 0;
        byteArray.endian = 'littleEndian';
        $G._set('byteArray', byteArray);
    }
    return clone(byteArray);
}

function fillRect(g, x, y, width, height, color) {
    g.graphics.beginFill(color);
    g.graphics.drawRect(x, y, width, height);
    g.graphics.endFill();
}

/***********************************************************************/
function resetObject(object, param) {
    ScriptManager.popEl(object);
    if (param && param.parent) param.parent.addChild(object);
    else $.root.addChild(object);
    object.transform.matrix3D = null;
    return object;
}
/***********************************************************************/
function setParameters(object, param) {
    foreach(param, 
    function(key, val) {
        if (object.hasOwnProperty(key)) object['' + key] = val;
    });
}
/***********************************************************************/
function eraseParameters(param, filter) {
    var newParam = {};
    foreach(param, 
    function(key, val) {
        if (!filter.hasOwnProperty(key)) newParam['' + key] = val;
    });
    return newParam;
}
/***********************************************************************/
function createCanvas(param) {
    var object = resetObject($.createCanvas({
        lifeTime: 0
    }), param);
    setParameters(object, eraseParameters(param, {
        parent: 0
    }));
    return object;
}
/***********************************************************************/
function createText(str, param) {
    var object = resetObject($.createComment(str, {
        lifeTime: 0
    }), param);
    object.defaultTextFormat = $.createTextFormat('微软雅黑', (param && param.size) || 14, (param && param.color != null) ? param.color: 0xFFFFFF, false, false, false);
    object.filters = [];
    object.text = str;
    setParameters(object, eraseParameters(param, {
        parent: 0,
        size: 0,
        color: 0
    }));
    return object;
}

function drawBound(x, y) {

    g.x = tl.x + 32 * x;
    g.y = tl.y + 32 * y;
}

function trimX(x) {
	var res = Math.floor((x - tl.x) / 32);
    if (res < 0) {
        return 0;
    } else if (res >= XSIZE){
        return XSIZE - 1;
    } else {
    	return res;
    }
}

function trimY(y) {
	var res = Math.floor((y - tl.y) / 32);
    if (res < 0) {
        return 0;
    } else if (res >= YSIZE) {
        return YSIZE - 1;
    } else {
    	return res;
    }
}

function createEmptyMap() {
    for (var i = 0; i < XSIZE; i++) {
        for (var j = 0; j < YSIZE; j++) {
            if ((i == 0) || (i == XSIZE - 1) || (j == 0) || (j == YSIZE - 1)) {
                placeObj(blocks, i, j, TYPE_BLOCK_SOLID);
            } else {
                placeObj(blocks, i, j, TYPE_EMPTY);
            }          
        };
    };
}

function saveMap(map) {
    var arr = [];
    var byte_arr = createByteArray();
    for (var i = 1; i < XSIZE - 1; i++) {
        for (var j = 1; j < YSIZE - 1; j++) {
    		arr.push(map[i][j].type);
        }
    }
    for (var i = 0; i < arr.length; i += 2) {
        var c = arr[i] * 16 + arr[i+1];
        byte_arr.writeByte(c);
    }
    MAP_TO_LOAD = '`';
    MAP_TO_LOAD = MAP_TO_LOAD + compress(byte_arr);
    return MAP_TO_LOAD;
}

function loadMap(str) {
	createEmptyMap();
	var ch, t;
	var shifted = str.substr(1);
	var origin = extract(shifted);
	// trace(origin.length);
	origin.position = 0;
    for (var i = 1; i < XSIZE - 1; i++) {
        for (var j = 1; j < YSIZE - 1; j++) {
            if ((i*YSIZE+j) % 2 == 0) {
            	ch = origin.readUnsignedByte();
                t = Math.floor(ch / 16);
            } else {
                t = ch % 16;
            }
            placeObj(blocks, i, j, t);
        }
    }
}

function checkSum(str) {
	for (var i = 1; i < str.length; i++) {
		if (BASE64_CHARS.indexOf(str.charAt(i)) == -1)
			return false;
	};
	if (str.charAt(0) != '`') {
		return false;
	};

	var toCheck = extract(str.substr(1));
	trace(toCheck.length);
	if (toCheck.length > 100)
		return true;
	else
		return false;
}

function rollMap() {
	if (Player.commentList.length == 0) {
		return null;
	};
	var arr = [];
	for (var i = 0; i < Player.commentList.length; i++) {
		if (checkSum(Player.commentList[i].text)) {
			arr.push(Player.commentList[i].text);
		}
	};
	if (arr.length == 0) {
		return null;
	};
	return arr[Utils.rand(0, arr.length)];
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

function loadBitmapData(width, height, raw) {
    var bmd = Bitmap.createBitmapData(width, height);
    bmd.setPixels(bmd.rect, extract(raw));
    return bmd;
}
//Bullet
var Bullet = {
	speed:5,
	width:5,
	height:5,
	init:function(){
		this.bullets = [];
		this.bulletPic = [];
		this.bmd_bullet = loadBitmapData2(5,5,raw_bullet);
	//	this.bulletPic = Bitmap.createBitmap({
	//		bitmapData:this.bmd_bullet,
	//		lifeTime:INT_MAX,
	//		parent:mainCanvas
	//	});
		
	},
	
	shoot:function(){
		trace("shoot1");
		var speed = 0;
		if(player.shape2.alpha == 1){
				bulletX = player.shape.x + 20;
				speed = this.speed;
			}
			else{
				bulletX = player.shape.x + 4;
				speed -= this.speed;
			}
		var initBullet = {
		x:player.shape.x + 20,
		y:player.shape.y + 10,
		speed:speed,
		Life:200
		};
		trace("shoot2");
		this.bullets.push(initBullet);
		var pic = Bitmap.createBitmap({
			bitmapData:this.bmd_bullet,
			lifeTime:INT_MAX,
			parent:mainCanvas
			});
		this.bulletPic.push(pic);
		trace(this.bullets);
	},
	drawBullet:function(){
		var bullet1 = []; 
		for(var i = 0;i<this.bullets.length;i+=1){
			//trace("drawshoot" + i + "|" + this.bullets[i].x + "|" + this.bullets[i].y + "|" + this.bullets[i].speed);
			bullet1.push({});
			bullet1[i] = {};
			bullet1[i].shape = this.bulletPic[i];
			bullet1[i].shape.x = this.bullets[i].x;
			bullet1[i].shape.y = this.bullets[i].y;
			this.bullets[i].x += this.bullets[i].speed;
			this.bullets[i].Life--;
			if(this.bullets[i].Life <= 0){
			this.bullets.splice(i,1);
			this.bulletPic.splice(i,1);
			};
		}
	}
};
//Bullet

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
    bmd_stab_up = loadBitmapData(32, 32, raw_stab_up);
    bmd_stab_down = loadBitmapData(32, 32, raw_stab_down);
    bmd_stab_left = loadBitmapData(32, 32, raw_stab_left);
    bmd_stab_right = loadBitmapData(32, 32, raw_stab_right);
    bmd_player = loadBitmapData(22,22,raw_player);
    bmd_player2 = loadBitmapData(22, 22, raw_player2);
    bmd_block = loadBitmapData(32, 32, raw_block);
    bmd_block_solid = loadBitmapData(32, 32, raw_block_solid);
    bmd_rubber = loadBitmapData(32, 32, raw_rubber);

    // var a = StrToByteArr(player_bytes);
    // var b = compress(a);
    // trace(b);
    traps.length = 0;
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
    g.graphics.lineStyle(2, 0xFF4040, 1, false);
    g.graphics.lineTo(32, 0);
    g.graphics.lineTo(32, 32);
    g.graphics.lineTo(0, 32);
    g.graphics.lineTo(0, 0);

	destination = $.createShape({
		x: -100,
		y: -100,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(destination, 0, 0, 32, 32, 0xFFD700);
}

function createGUICanvas() {
	GUICanvas = createCanvas({x:0, y:0});
}

function createPlayer() {
	player = {};
	
    var pic = Bitmap.createBitmap({
        bitmapData: bmd_player,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    var pic2 = Bitmap.createBitmap({
        bitmapData: bmd_player2,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    player.shape = pic;
    player.shape.x = tl.x + 96;
    player.shape.y = tl.y + 32;
    player.shape2 = pic2;
    player.shape2.x = tl.x + 96;
    player.shape2.y = tl.y + 32;
    player.shape.alpha = 0;

    player.collisionBox = $.createShape({
        alpha: 0,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
    fillRect(player.collisionBox, 5, 0, 16, 22, 0x000000);
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
    reborn_point.x = player.shape.x;
    reborn_point.y = player.shape.y;
    player.ySpeed = 0;
    player.xSpeed = 0;
    player.currentPower = 0;
    player.lock = false;
}

function placeObj(map, x, y, type) {
    var block = {};
    block.type = type;
    if (type == TYPE_BLOCK) {
        var bmp = createBitmap(bmd_block, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_BLOCK_SOLID) {
        var bmp = createBitmap(bmd_block_solid, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_EMPTY) {
        map[x][y] = block;
    } else if (type == TYPE_STAB_UP) {
        var bmp = createBitmap(bmd_stab_up, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_STAB_DOWN) {
        var bmp = createBitmap(bmd_stab_down, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_STAB_LEFT) {
        var bmp = createBitmap(bmd_stab_left, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_STAB_RIGHT) {
        var bmp = createBitmap(bmd_stab_right, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_PLAYER) {
    	reborn_point.x = tl.x + x * 32;
    	reborn_point.y = tl.y + y * 32;
    	player.shape.x = reborn_point.x;
    	player.shape.y = reborn_point.y;
    	player.shape2.x = player.shape.x;
    	player.shape2.y = player.shape.y;
    	player.collisionBox.x = reborn_point.x;
    	player.collisionBox.y = reborn_point.y;
        map[x][y] = block;
    } else if (type == TYPE_DESTINATION) {
    	destination.x = tl.x + x * 32;
    	destination.y = tl.y + y * 32;
    	map[x][y] = block;
    } else if (type == TYPE_TRAP_UP) {
    	var bmp = createBitmap(bmd_stab_down, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
    	bmp.alpha = 0.5;
        if (CURRENT_MODE == PLAY_MODE) {
        	bmp.alpha = 0;
        };
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_TRAP_DOWN) {
    	var bmp = createBitmap(bmd_stab_up, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
    	bmp.alpha = 0.5;
    	if (CURRENT_MODE == PLAY_MODE) {
        	bmp.alpha = 0;
        };
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_TRAP_LEFT) {
    	var bmp = createBitmap(bmd_stab_right, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
    	bmp.alpha = 0.5;
    	if (CURRENT_MODE == PLAY_MODE) {
        	bmp.alpha = 0;
        };
        block.shape = bmp;
        map[x][y] = block;
    } else if (type == TYPE_TRAP_RIGHT) {
    	var bmp = createBitmap(bmd_stab_left, tl.x + x * 32, tl.y + y * 32, 0, mainCanvas);
    	bmp.alpha = 0.5;
    	if (CURRENT_MODE == PLAY_MODE) {
        	bmp.alpha = 0;
        };
        block.shape = bmp;
        map[x][y] = block;
    } 
}



function createDragModels() {

    var still = createBitmap(bmd_block, tl.x + 22.5 * 32, tl.y + 1 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_block, tl.x + 22.5 * 32, tl.y + 1 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_BLOCK;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_block_solid, tl.x + 22.5 * 32, tl.y + 2.5 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_block_solid, tl.x + 22.5 * 32, tl.y + 2.5 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_BLOCK_SOLID;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_stab_up, tl.x + 22.5 * 32, tl.y + 4 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_stab_up, tl.x + 22.5 * 32, tl.y + 4 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_STAB_UP;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_stab_down, tl.x + 22.5 * 32, tl.y + 5.5 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_stab_down, tl.x + 22.5 * 32, tl.y + 5.5 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_STAB_DOWN;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_stab_left, tl.x + 22.5 * 32, tl.y + 7 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_stab_left, tl.x + 22.5 * 32, tl.y + 7 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_STAB_LEFT;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_stab_right, tl.x + 22.5 * 32, tl.y + 8.5 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_stab_right, tl.x + 22.5 * 32, tl.y + 8.5 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_STAB_RIGHT;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_rubber, tl.x + 22.5 * 32, tl.y + 10 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_rubber, tl.x + 22.5 * 32, tl.y + 10 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = -1;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = createBitmap(bmd_player2, tl.x + 22.5 * 32, tl.y + 11.5 * 32, 0, GUICanvas);
    var move = createBitmap(bmd_player2, tl.x + 22.5 * 32, tl.y + 11.5 * 32, 0, GUICanvas);
    var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_PLAYER;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);

    var still = $.createShape({
    	x: tl.x + 22.5 * 32,
    	y: tl.y + 13 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(still, 0, 0, 32, 32, 0xFFD700);
	var move = $.createShape({
    	x: tl.x + 22.5 * 32,
    	y: tl.y + 13 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(move, 0, 0, 32, 32, 0xFFD700);
	var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_DESTINATION;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);
    createText("终点", {x: tl.x + 22.5 * 32, y: tl.y + 14 * 32});

    var still = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 1 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(still, 0, 0, 32, 32, 0xaaaa33);
	var move = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 1 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(move, 0, 0, 32, 32, 0xaaaa33);
	var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_TRAP_LEFT;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);
    createText("左坑", {x: tl.x - 1.5 * 32, y: tl.y + 2 * 32});

    var still = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 2.5 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(still, 0, 0, 32, 32, 0x00aa00);
	var move = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 2.5 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(move, 0, 0, 32, 32, 0x00aa00);
	var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_TRAP_RIGHT;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);
    createText("右坑", {x: tl.x - 1.5 * 32, y: tl.y + 3.5 * 32});

    var still = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 4 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(still, 0, 0, 32, 32, 0xCC0033);
	var move = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 4 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(move, 0, 0, 32, 32, 0xCC0033);
	var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_TRAP_UP;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);
    createText("上坑", {x: tl.x - 1.5 * 32, y: tl.y + 5 * 32});

    var still = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 5.5 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(still, 0, 0, 32, 32, 0xCC9933);
	var move = $.createShape({
    	x: tl.x - 1.5 * 32,
    	y: tl.y + 5.5 * 32,
        lifeTime: INT_MAX,
        parent: mainCanvas
    });
	fillRect(move, 0, 0, 32, 32, 0xCC9933);
	var model = {};
    model.still = still;
    model.move = move;
    model.type = TYPE_TRAP_DOWN;
    (model.move).alpha = 0;
    model.dragging = false;
    drag_models.push(model);
    createText("下坑", {x: tl.x - 1.5 * 32, y: tl.y + 6.5 * 32});

    createText("左坑、右坑。。。是指触发后左侧、右侧。。。一格飞入刺", {x: tl.x + 4 * 32, y: tl.y + 15 * 32, color: 0x000000});
}

function createReadyButtons() {
	createText("加入了隐藏刺，创造属于你自己的地图吧\n别忘了让别人来玩哦\n(已修复：跳\"克星\")\n若显示太乱，可调节弹幕透明度", {x: tl.x, y: 20, size: 30, color: 0xCC6633});
	var but1 = $.createButton({
        x:width / 2 - 200,
        y:height / 2 - 100,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"想要被勾引？\n作者：左岸出品",
        onclick:function(){
        	CURRENT_MODE = PLAY_MODE;
			MAP_TO_LOAD = map1;
			main(PLAY_MODE);
			loadMap(MAP_TO_LOAD);
		},
		lifeTime: 0
  	});
  	but1.width = 100;

  	var but1 = $.createButton({
        x:width / 2 - 50,
        y:height / 2 - 100,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"考验底力\n作者：陆仁岬",
        onclick:function(){
        	CURRENT_MODE = PLAY_MODE;
			MAP_TO_LOAD = map2;
			main(PLAY_MODE);
			loadMap(MAP_TO_LOAD);
		},
		lifeTime: 0
  	});
  	but1.width = 100;

  	var but1 = $.createButton({
        x:width / 2 + 100,
        y:height / 2 - 100,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"抖M大师?\n作者：处虚嘲幻",
        onclick:function(){
        	CURRENT_MODE = PLAY_MODE;
			MAP_TO_LOAD = map3;
			main(PLAY_MODE);
			loadMap(MAP_TO_LOAD);
		},
		lifeTime: 0
  	});
  	but1.width = 100;

	var a = $.createButton({
        x:width / 2 - 50,
        y:height / 2 - 40,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"开始游戏",
        onclick:function(){
            waitingForInput = true;
            CURRENT_MODE = PLAY_MODE;
			init();
            createBackground();
            var c = $.createComment("请在弹幕输入框中输入地图码", {
            	x:width / 2 - 6.5 * 30,
        		y:height / 2 - 15,
        		fontsize: 30,
        		color: 0xFFD700,
        		lifeTime:INT_MAX
            });
            c.font = "微软雅黑";
            var b = $.createButton({
		        x:width - 100,
		        y:0,
		        text:"返回主菜单",
	        onclick:function(){
	        	ready();
	       	}});
		},
		lifeTime: 0
  	});

    var b = $.createButton({
        x:width / 2 - 50,
        y:height / 2 + 20,
        parent:GUICanvas,
        text:"编辑模式",
        onclick:function(){
        	CURRENT_MODE = EDIT_MODE;
            main(EDIT_MODE);
            $.root.removeEventListener("enterFrame", gameRunning);
            createEmptyMap();
            MAP_TO_LOAD = saveMap(blocks);
            createDragModels();
        },
        lifeTime: 0
    });
}

function createMainButtons() {
	var a = $.createButton({
        x:width / 2 - 50,
        y:0,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"重新开始",
        onclick:function(){
	      	main(PLAY_MODE);
	      	loadMap(MAP_TO_LOAD);
  		},
  		lifeTime: 0
	});
	var b = $.createButton({
        x:width - 100,
        y:0,
        parent:GUICanvas,
        text:"返回主菜单",
        onclick:function(){
        	ready();
       	},
       	lifeTime: 0
       });
}

function createEditButtons() {
    var a = $.createButton({
        x:width - 100,
        y:tl.y + YSIZE * 32,
        parent:GUICanvas,
        color: 0xFFD700,
        text:"返回主菜单",
        onclick:function(){
	      ready();
	    },
	    lifeTime: 0
		});
    var b = $.createButton({
        x:width / 2  - 50,
        y:0,
        parent:GUICanvas,
        text:"测试",
        onclick:function(){
        	MAP_TO_LOAD = saveMap(blocks);
        	main(EDIT_MODE);
        	loadMap(MAP_TO_LOAD);
        	$.root.addEventListener("enterFrame", gameRunning);
       	},
       	lifeTime: 0
       });
    var c = $.createButton({
        x:width  - 100,
        y:0,
        parent:GUICanvas,
        text:"编辑",
        onclick:function(){
        	drag_models.length = 0;
        	main(EDIT_MODE);
            $.root.removeEventListener("enterFrame", gameRunning);
            loadMap(MAP_TO_LOAD);
            createDragModels();

       	},
       	lifeTime: 0
       });
}

function keyDown(key) {
	if (key == 87) {
		if (!player.ySpeed) {
			player.ySpeed = JUMP_SPEED;
            GRAVITY = GRAVITY_FLOAT;
            sound.play();
		} else if (player.currentPower == 1) {
			sound.play();
            player.currentPower++;
            player.ySpeed = JUMP_SPEED;
            GRAVITY = GRAVITY_FLOAT;
        };
	};
	if (key == 65) {
		player.xSpeed = -X_SPEED;
	};
	if (key == 68) {
		player.xSpeed = X_SPEED;
	};
	if (key == 83) {
		Bullet.shoot();
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

	trapMove();
	// trace("here");
	checkDestination();
    // the order is important!
    checkCollision();

    movePlayer();
    checkStab();
    checkGround();
    checkCeiling(); 
    checkTrap();
    Bullet.drawBullet();
}

function trapMove() {
	// trace(traps.length);
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
	for (var i = traps.length - 1; i >= 0; i--) {
		// trace(traps[i].shape.x);
		if ((traps[i].shape.x < width) && (traps[i].shape.x > -32) 
			&& (traps[i].shape.y < height) && (traps[i].shape.y > -32) ) {
			if (traps[i].type == TYPE_TRAP_DOWN) {
				traps[i].shape.y -= 5;
			} else if (traps[i].type == TYPE_TRAP_UP) {
				traps[i].shape.y += 5;
			} else if (traps[i].type == TYPE_TRAP_LEFT) {
				traps[i].shape.x += 5;
			} else if (traps[i].type == TYPE_TRAP_RIGHT) {
				traps[i].shape.x -= 5;
			}
			p1.x = traps[i].shape.x;
			p1.y = traps[i].shape.y;
			if (traps[i].type == TYPE_TRAP_DOWN) {
                if (bmd_stab_up.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (traps[i].type == TYPE_TRAP_UP) {
                if (bmd_stab_down.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (traps[i].type == TYPE_TRAP_RIGHT) {
                if (bmd_stab_left.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (traps[i].type == TYPE_TRAP_LEFT) {
                if (bmd_stab_right.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            };
		} else {
			traps[i].shape.alpha = 0;
			var n = 0;
			for(var j=0;j<traps.length;j++) 
		    { 
		        if(traps[j]!=traps[i]) 
		        { 
		            traps[n++]=traps[j];
		        } 
		    } 
		    traps.length-=1;
		}
	};
}

function checkDestination() {
	if (player.collisionBox.hitTestObject(destination))
		gameOver();
}

function movePlayer() {
    if (player.ySpeed > -2) {
        GRAVITY = GRAVITY_ORIGIN;
    };
    if (player.xSpeed > 0) {
    	player.shape2.alpha = 1;
    	player.shape.alpha = 0;
    }
    if (player.xSpeed < 0) {
    	player.shape2.alpha = 0;
    	player.shape.alpha = 1;
    }
    var i = trimX(player.shape.x + player.xSpeed + 4);
    var j = trimY(player.shape.y + player.ySpeed);
    if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
    	player.ySpeed =  player.shape.y - 32 - blocks[i][j].shape.y;
    	
    };
    var i = trimX(player.shape.x + player.xSpeed + 20);
    var j = trimY(player.shape.y + player.ySpeed);
    if (blocks[i][j].type == TYPE_BLOCK || blocks[i][j].type == TYPE_BLOCK_SOLID) {
    	player.ySpeed =  player.shape.y - 32 - blocks[i][j].shape.y;
    	
    };

    if (player.ySpeed > MAX_FALLING_SPEED) {
    	player.ySpeed = MAX_FALLING_SPEED;
    };
	player.shape.x += player.xSpeed;  	
    player.shape.y += player.ySpeed;
    player.shape2.x += player.xSpeed;  	
    player.shape2.y += player.ySpeed;
    
    player.collisionBox.x = player.shape.x;
    player.collisionBox.y = player.shape.y;
}

function checkTrap() {
	var hit = false;
    var x = player.collisionBox.x;
    var y = player.collisionBox.y;
    var start_i = trimX(player.shape.x);
    var end_i = trimX(player.shape.x + 22);
    var start_j = trimY(player.shape.y);
    var end_j = trimY(player.shape.y + 22);
    var TRAP_TYPE;
    // trace("here");
    var i, j;
    for (i = start_i; i <= end_i; i++) {
    	for (j = start_j; j <= end_j; j++) {
    		// trace(blocks[i][j].type);
    		if (blocks[i][j].type >= TYPE_TRAP_UP && blocks[i][j].type <= TYPE_TRAP_RIGHT) {
	        	// trace(blocks[i][j].shape.x);
	            if (player.collisionBox.hitTestObject(blocks[i][j].shape)) {
	            	TRAP_TYPE = blocks[i][j].type;
        	    	blocks[i][j].shape.alpha = 0;
        	    	if (TRAP_TYPE == TYPE_TRAP_LEFT) {
		    			var bmp = createBitmap(bmd_stab_right, tl.x + (i - 1) * 32, tl.y + j * 32, 0, mainCanvas);
		        		traps.push({type: TRAP_TYPE, shape: bmp});
        	    	} else if (TRAP_TYPE == TYPE_TRAP_RIGHT) {
		    			var bmp = createBitmap(bmd_stab_left, tl.x + (i + 1) * 32, tl.y + j * 32, 0, mainCanvas);
		        		traps.push({type: TRAP_TYPE, shape: bmp});
        	    	} else if (TRAP_TYPE == TYPE_TRAP_UP) {
		    			var bmp = createBitmap(bmd_stab_down, tl.x + i * 32, tl.y + (j - 1) * 32, 0, mainCanvas);
		        		traps.push({type: TRAP_TYPE, shape: bmp});
        	    	} else if (TRAP_TYPE == TYPE_TRAP_DOWN) {
		    			var bmp = createBitmap(bmd_stab_up, tl.x + i * 32, tl.y + (j + 1) * 32, 0, mainCanvas);
		        		traps.push({type: TRAP_TYPE, shape: bmp});
        	    	}
			        placeObj(blocks, i, j, TYPE_EMPTY);
	            	trace("hit");
	                hit = true;
	                break;
	            }
	        };
    	};
    };
    // if (hit) {

    // }
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
                break;
            }
        };
    };
    if (!hit) {
    	if (!player.ySpeed) {
    		player.currentPower ++;
    	};
    	
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
            if (blocks[i][j].type != TYPE_EMPTY && blocks[i][j].type != TYPE_PLAYER) {
                p1.x = blocks[i][j].shape.x;
                p1.y = blocks[i][j].shape.y;
            };
            if (blocks[i][j].type == TYPE_STAB_UP) {
                if (bmd_stab_up.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (blocks[i][j].type == TYPE_STAB_DOWN) {
                if (bmd_stab_down.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (blocks[i][j].type == TYPE_STAB_LEFT) {
                if (bmd_stab_left.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            } else if (blocks[i][j].type == TYPE_STAB_RIGHT) {
                if (bmd_stab_right.hitTest(p1, 255, bmd_player, p2, 255)) {
                    gameOver();
                }
            };
        };
    };

}

function gameOver () {
	$.root.removeEventListener("enterFrame", gameRunning);
	ScriptManager.clearTrigger();
	var a = $.createButton({
        x:width / 2 - 50,
        y:height / 2 - 20,
        parent:GUICanvas,
        text:"重新开始",
        onclick:function(){
        	if (CURRENT_MODE == EDIT_MODE) {
        		createText("请点编辑", {x: width / 2 - 40, y: height / 2 - 40, size: 30});
        	} else {
		      	main(CURRENT_MODE);
		      	loadMap(MAP_TO_LOAD);
		      }
    }});
}

function ready() {
    init();
    createBackground();
    createMainCanvas();
    createGUICanvas();
    var title = $.createComment("i wanna be the guy!弹幕版\n后续待制作:发射子弹，多地图切换", {
    	x:width / 2 - 250,
		y:height / 2 + 100,
		fontsize: 40,
		color: 0x00D700,
		lifeTime:INT_MAX
    });
    title.font = "微软雅黑";
    createReadyButtons();


}




Player.commentTrigger(function(data){
	if (waitingForInput) {
		CURRENT_MODE = PLAY_MODE;
		MAP_TO_LOAD = data.text;
		main(PLAY_MODE);
		loadMap(data.text);
		waitingForInput = false;
	};
},INT_MAX);

function main(mode) {
    init();
    createBackground();
    createMainCanvas();
    createGUICanvas();
    createPlayer();
    Bullet.init();

    if (mode == EDIT_MODE) {
    	createEditButtons();
    } else if (mode == PLAY_MODE) {
    	trace("here");
    	createMainButtons();
    }

    Player.keyTrigger(function(key){
    	keyDown(key);
	},INT_MAX);
	Player.keyTrigger(function(key){
	    keyUp(key);
	},INT_MAX,true);


	$.frameRate = 30;
	$.root.addEventListener("enterFrame", gameRunning);

	$.root.mouseEnabled = true;
	$.root.addEventListener("mouseMove", function (e) {
	    

	    for (var i = 0; i < drag_models.length; i++) {
	        if (drag_models[i].dragging) {
	            drag_models[i].move.alpha = 1;
	            drag_models[i].move.x = e.localX - 16;
	            drag_models[i].move.y = e.localY - 16;
	            if (drag_models[i].type != -1) {
	                if (blocks[trimX(e.localX)][trimY(e.localY)].type == TYPE_EMPTY) {
	                    drawBound(trimX(e.localX), trimY(e.localY)); 
	                } else {
	                    drawBound(-100, -100); 
	                }
	            } else {
	                if (blocks[trimX(e.localX)][trimY(e.localY)].type == TYPE_EMPTY) {
	                    drawBound(-100, -100); 
	                } else {
	                    drawBound(trimX(e.localX), trimY(e.localY)); 
	                }
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

	if (mode == EDIT_MODE) {
		copyTextField = createText('', {
	        parent: mainCanvas,
	        color: 0xFF3030,
	        x: 50,
	        y: 0,
	        alpha: 1
	    });
		copyTextField.autoSize = 'none';
		allowCopy = false;
	    var format = copyTextField.defaultTextFormat;
	    format.align = 'center';
	    copyTextField.defaultTextFormat = format;
	    copyTextField.width = 100;
	    copyTextField.height = 30;
	    copyTextField.text = '生成地图';
	    copyTextField.fontsize = 24;
	    copyTextField.mouseEnabled = copyTextField.selectable = true;

	    copyTextField.addEventListener('focusOut', 
		function(e) {
			if (allowCopy) {
		        var textInput = e.relatedObject;
		        // trace("textInput");
		        textInput.text = MAP_TO_LOAD;
		        textInput.selectAll();
		        c.alpha = 0;
		        allowCopy = false;
			};
		});
		copyTextField.addEventListener('click', 
		function(e) {
			if (!allowCopy) {
				MAP_TO_LOAD = saveMap(blocks);
		    	allowCopy = true;
		    	if (c == undefined) {
			        c = $.createComment("请点击弹幕输入框", {
			        	x:width / 2 - 6.5 * 30,
			    		y:height / 2 - 15,
			    		fontsize: 30,
			    		color: 0xFFD700,
			    		lifeTime:INT_MAX
			        });
			        c.font = "微软雅黑";	
		    	} else {
		    		c.alpha = 1;
		    	}
			};
		});
	};



	$.root.addEventListener("mouseUp", function (e) {
	    for (var i = 0; i < drag_models.length; i++) {
	        if (!drag_models[i].dragging && (drag_models[i].still.alpha == 0.5)) {
	            drag_models[i].dragging = true;
	        } else if (drag_models[i].dragging) {
	            if (drag_models[i].type != -1) { // not rubber
	                if (blocks[trimX(e.localX)][trimY(e.localY)].type == TYPE_EMPTY) {
	                	if (drag_models[i].type == TYPE_PLAYER) {
	                		placeObj(blocks, trimX(reborn_point.x), trimY(reborn_point.y), TYPE_EMPTY);
	                	};
	                    placeObj(blocks, trimX(e.localX), trimY(e.localY), drag_models[i].type);
	                }
	            } else {
	                if (blocks[trimX(e.localX)][trimY(e.localY)].type != TYPE_EMPTY) {
	                    blocks[trimX(e.localX)][trimY(e.localY)].shape.alpha = 0;
	                    placeObj(blocks, trimX(e.localX), trimY(e.localY), TYPE_EMPTY);
	                }
	            }
	            
	            drag_models[i].dragging = false;
	            drag_models[i].move.alpha = 0;
	            drawBound(-100, -100);
	        };
	    };
	});
}

ready();

