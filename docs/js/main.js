const nav = new Vue({
    el: "#dropdown",
    data: {
        isOpen: false,
        globalnav: [
            {
                url: "manga/oyakume.html",
                name: "まんが",
                submenu: [
                    {
                        url: "manga/oyakume.html",
                        name: "神様のお役目"
                    },
                    {
                        url: "manga/sakura.html",
                        name: "桜舞う木の下で"
                    },
                    {
                        url: "manga/short.html",
                        name: "短編"
                    }
                ]
            },
            {
                url: "about.html",
                name: "ここについて"
            },
            {
                url: "link.html",
                name: "周辺案内(リンク）"
            }
        ]

    },

    methods: {
        mouseover: function() {
            this.isOpen = true;
            console.log("mouseover:" + this.isOpen);
        },
        mouseleave: function(){
            this.isOpen = false;
            console.log("mouseleave:" + this.isOpen );
        }
    }
});


// <li><a href="manga.html">まんが</a>
// <ul class="global-nav-sub">
// <li><a href="manga/oyakume.html">神様のお役目</a></li>
// <li><a href="manga/sakura.html">桜舞う木の下で</a></li>
// <li><a href="manga/short.html">短編</a></li>
// </ul>
// </li>
// <li><a href="about.html">ここについて</a></li>
// <li><a href="link.html">周辺案内(リンク）</a></li>