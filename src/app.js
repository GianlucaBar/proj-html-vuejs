var app = new Vue(
    {
        el: '#root',

        data: {
            // header data
            topMenu: [
                {
                    name: 'Home',
                    link: '#',
                    class: ''
                },

                {
                    name: 'Culinary History',
                    link: '#',
                    class: ''
                },

                {
                    name: 'Our Team',
                    link: '#',
                    class: ''
                },

                {
                    name: 'Our Menu',
                    link: '#',
                    class: ''
                },

                {
                    name: 'Takeout',
                    link: '#',
                    class: 'new'
                },

                {
                    name: 'Bulletin',
                    link: '#',
                    class: ''
                },

                {
                    name: 'Reservations',
                    link: '#',
                    class: ''
                }
            ],

            iconLinks: [
                {
                    class: 'fas fa-shopping-cart',
                    link: '#'
                }
            ],

            // footer data
            footerMenu:[
                {
                    class: 'fab fa-facebook-f',
                    link: 'https://www.facebook.com'
                },

                {
                    class: 'fab fa-twitter',
                    link: 'https://www.twitter.com'
                },

                {
                    class: 'fab fa-youtube',
                    link: 'https://www.youtube.com'
                },

                {
                    class: 'fab fa-instagram',
                    link: 'https://www.instagram.com'
                },

                {
                    class: 'fab fa-linkedin-in',
                    link: 'https://www.linkedin.com'
                }

            ]
            
        },

        methods: {
            
		}


    });