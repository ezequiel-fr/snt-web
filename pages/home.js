export default `
<header>
    <div class="first-part">
        <div class="title">
            <h1>
                <a href="#" target="_self">
                    <span>C</span>od'ons
                </a>
            </h1>
        </div>
        
        <div class="icon-menu">
            <span></span>
        </div>
    </div>

    <div class="menu">
        <nav class="content">
            <ul>
                <li>
                    <a href="#table-of-content">Sommaire</a>
                </li>

                <li>
                    <a href="#story">Historique</a>
                </li>

                <li class="custom-select">
                    <p>
                        HTML
                        <span>
                            <span></span>
                        </span>
                    </p>

                    <div>
                        <div class="box">
                            <ul>
                                <li>
                                    <a href="#fundamentals-html-files">Format</a>
                                </li>

                                <li>
                                    <a href="#fundamentals-html-code-format">Fonctionnement</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li class="custom-select">
                    <p>
                        CSS
                        <span>
                            <span></span>
                        </span>
                    </p>

                    <div class="css">
                        <div class="box">
                            <ul>
                                <li>
                                    <a href="#fundamentals-css-files">Format</a>
                                </li>
                                
                                <li>
                                    <a href="#fundamentals-css-code-format">Fonctionnement</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</header>

<main role="main">
    <section class="title" id="">
        <h1>Cod'ons</h1>

        <span></span>

        <h3>Ezequiel FRIDEL</h3>
    </section>

    <hr id="table-of-content">

    <section class="table-of-content">
        <div class="box-title">
            <h2>Sommaire :</h2>
        </div>

        <div class="container">
            <ol class="content">
                <li class="first">
                    <a href="#story">L'histoire du web</a>
                </li>

                <li class="childs">
                    <a href="#fundamentals" data-content="Bases fondamentales">Bases fondamentales</a>

                    <ol class="sub">
                        <li class="childs">
                            <a href="#fundamentals-html" data-content="Créer un fichier HTML">Créer un fichier HTML</a>

                            <ol class="sub">
                                <li><a href="#fundamentals-html-files">Format HTML</a></li>
                                <li><a href="#fundamentals-html-code-format">Système de balises</a></li>
                            </ol>
                        </li>

                        <li class="childs">
                            <a href="#fundamentals-css" data-content="Créer un fichier CSS">Créer un fichier CSS</a>

                            <ol class="sub">
                                <li><a href="#fundamentals-css-files">Format CSS</a></li>
                                <li><a href="#fundamentals-css-code-format">Système d'écriture</a></li>
                            </ol>
                        </li>
                    </ol>
                </li>

                
                <li><a href="#footer">A propos de nous</a></li>
                <li><a href="#footer">Liens rapides</a></li>
                <li><a href="#footer">Contactez-nous</a></li>
            </ol>

            <div class="suggest">
                <div data-href="#story" style="--t-b: 10px;">
                    <div class="card-content">
                        <h3>
                            L'histoire du web
                            <span></span>
                        </h3>

                        <p>
                            Découvrez dans cette section qui est le
                            créateur du web et la création étonnante du web.
                        </p>
                    </div> 
                </div>

                <div data-href="#fundamentals" style="--t: 10px; --t-b: 24px">
                    <div class="card-content">
                        <h3>
                            Bases fondamentales
                            <span></span>
                        </h3>

                        <p>
                            Quelques bases fondamentales à avoir lors de
                            ses premiers pas dans le développement web.
                        </p>
                    </div> 
                </div>

                <div data-href="#fundamentals-html" style="--t: 20px; --t-b: 40px;">
                    <div class="card-content">
                        <h3>
                            Créer un fichier HTML
                            <span></span>
                        </h3>

                        <p>
                            Créer et éditer son premier fichier HTML avec
                            une syntaxe de base correcte.
                        </p>
                    </div> 
                </div>

                <div data-href="#fundamentals-html-files" style="--t: 32px; --t-b: 58px;">
                    <div class="card-content">
                        <h3>
                            Format HTML
                            <span></span>
                        </h3>

                        <p>
                            Comment créer son fichier HTML ? Où ?
                            Quel système ?
                        </p>
                    </div> 
                </div>
                
                <div data-href="#fundamentals-html-code-format" style="--t: 60px; --t-b: 54px;">
                    <div class="card-content">
                        <h3>
                            Système de balises
                            <span></span>
                        </h3>

                        <p>
                            Le langage HTML est un composé d'un système de balisage
                            qui diffère des autres langages de programmation...
                        </p>
                    </div> 
                </div>
        
                <div data-href="#fundamentals-css" style="--t: 80px; --t-b: 58px;">
                    <div class="card-content">
                        <h3>
                            Créer un fichier CSS
                            <span></span>
                        </h3>

                        <p>
                            Qu'est-ce qu'un fichier CSS ? A quoi sert-il ?
                        </p>
                    </div>
                </div>

                <div data-href="#fundamentals-css-files" style="--t: 100px; --t-b: 66px;">
                    <div class="card-content">
                        <h3>
                            Format CSS
                            <span></span>
                        </h3>

                        <p>
                            Créer et éditer une feuille de style CSS.
                        </p>
                    </div> 
                </div>

                <div data-href="#fundamentals-css-code-format" style="--t: 130px; --t-b: 60px;">
                    <div class="card-content">
                        <h3>
                            Système d'écriture
                            <span></span>
                        </h3>

                        <p>
                            L'écriture du CSS est également différente des
                            autres langages, en voici quelques notions rapides.
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <hr id="story">

    <section class="story">
        <div class="title">
            <h2>L'histoire du web</h2>
        </div>

        <div class="content">
            <picture>
                <source src="./assets/images/Tim Berners-Lee.jpg" type="image/jpg">
                <img src="./assets/images/Tim Berners-Lee.jpg" alt="Tim Berners Lee">
            </picture>

            <p>
                Fondateur de la toile, il navigue dans l'informatique bien avant de savoir coder. Fils de mathématiciens et ingénieurs informatiques
                - ses parents travaillent avec les tout premiers ordinateurs, Tim Berners-Lee est au collège à Londres lorsqu'il en fabrique un à partir d’un vieux téléviseur.
            </p>

            <p>
                Diplômé de l’université d’Oxford en physique, il signe à 30 ans pour une mission de six mois au Conseil européen pour la recherche nucléaire
                (CERN), qui durera dix ans. Sa mission initiale : créer une base de données pour les chercheurs. Mais au passage, Tim Berners-Lee invente le Web.
                Le 12 mars 1989, il rend un mémo intitulé <q>Gestion de l’information : une proposition</q>, qui en contient les principes fondateurs.
            </p>

            <p>
                L’idée est de faciliter l’accès à l’information pour les chercheurs du CERN grâce à des liens hypertextes et des ordinateurs connectés entre eux.
                Son chef de service, Mike Sendall, dit alors de ce rapport qu'il est <q>vague mais intéressant</q>, mais Tim Berners-Lee sera finalement autorisé à creuser
                l’idée quelques mois plus tard. Il commence à développer le World Wide Web.
            </p>

            <p>
                Le nom initial du web dans son mémo était <q>The Information Mesh</q>, mais Tim Berners-Lee le juge finalement trop complexe et trouve l’acronyme, <q>TIM</q> -
                son prénom - <q>trop narcissique</q>. Il met en place l’URL pour donner une adresse aux pages, le langage HTML, pour les afficher et le protocole HTTP pour les
                lier entre elles.
            </p>

            <p>
                En 1993, le CERN diffuse le code source du web. En un an, le nombre de serveurs web se multiplie, et tous utilisent le protocole HTTP. Une toile géante se tisse,
                sans que Tim Berners-Lee n’en tire profit. Il considère que le web doit être universel et gratuit. Pour le développer, il rejoint le Massachusetts Institute
                of Technology (MIT) en 1994 et fonde World Wide Web Consortium (W3C) pour fixer les standards d’un web ouvert, libre et transparent.
            </p>

            <p>
                Malgré ses multiples récompenses, Tim Berners-Lee déclare en 2004 n’avoir rien inventé. <q>J’ai juste emprunté un certain nombre de choses qui existaient
                déjà, et je les ai accrues un peu. [...] Construire le Web, je ne l’ai pas fait tout seul.</q>
            </p>

            <p>Mais 30 ans après son invention, le web semble avoir échappé à son fondateur.</p>

            <p>
                En 2018, <q>dévasté</q> par la manipulation des données privées, il crée la start-up Inrupt, un coffre-fort pour permettre à chacun de stocker ses données.
            </p>

            <p>D'après <a href="https://www.franceculture.fr/numerique/tim-berners-lee-le-genial-inventeur-du-web" target="_blank"><q><b>France Culture</b> - Tim Berners-Lee, le génie inventeur du web</q></a></p>
        </div>
    </section>

    <!-- -->
</main>

<footer class="auto-reload">
    <div class="container">
        <div class="about-us">
            <h2>A propos</h2>

            <div class="content">
                <p>
                    <span class="title">Cod'ons</span> est un site fait uniquement pour un travail
                    en SNT (Sciences Numériques et Technologiques).<br>
                    Il n'a pour but que de montrer certaines bases en développement web d'une autre approche.
                </p>

                <ul>
                    <li class="github">
                        <a href="https://github.com/TheRedMineTheRedMine" target="_blank" rel="noopener noreferrer">
                            <span></span>
                            <img src="./assets/images/github-icon.svg" alt="Icon">
                        </a>
                    </li>
                    
                    <li class="instagram">
                        <a href="https://www.instagram.com/ezequiel_fr_es/" target="_blank" rel="noopener noreferrer">
                            <span></span>
                            <img src="./assets/images/instagram-icon.svg" alt="Icon">
                        </a>
                    </li>
                    
                    <li class="youtube">
                        <a href="https://www.youtube.com/channel/UCHWXnXW7XpHy33MsWcjZLxw" target="_blank" rel="noopener noreferrer">
                            <span></span>
                            <img src="./assets/images/youtube-icon.svg" alt="Icon">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="quick-links">
            <h2>Liens rapides</h2>

            <div class="content">
                <ul class="info">
                    <li><a href="./terms-and-conditions/index.html">Termes et conditions d'utilisation</a></li>
                    <li><a href="https://paypal.com/donate?hosted_button_id=BQ9VTYNAH3RRC" target="_blank" rel="noopener noreferrer">Faire un don</a></li>
                    <li><a href="https://github.com/TheRedMineTheRedMine" target="_blank">TheRedMine Ent.</a></li>
                    <li><a href="https://theredstream.000webhostapp.com" target="_blank">TheRedStream</a></li>
                </ul>
            </div>
        </div>

        <div class="contact">
            <h2>Contactez-nous</h2>

            <div class="content">
                <ul class="infos">
                    <li>
                        <span>
                            <img src="./assets/images/envelope-icon.svg" alt="Envelope">
                        </span>

                        <span><a href="mailto:theredminedu51@gmail.com">theredminedu51@gmail.com</a></span>
                    </li>

                    <li>
                        <span>
                            <img src="./assets/images/envelope-icon.svg" alt="Envelope">
                        </span>

                        <span><a href="mailto:fridelezequiel@gmail.com">Ezequiel FRIDEL</a></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="copyright">
        Copyright &copy; 2022-2023 -
        <a href="#" target="_blank" rel="noopener noreferrer">TheRedMine Ent.</a>
        - Tout droits réservés
    </div>
</footer>`;