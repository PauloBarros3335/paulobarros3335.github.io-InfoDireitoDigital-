jQuery(document).ready(function($) {


    /*=============================================
    =            Checa se é mobile            =
    =============================================*/
    var $mobile = jQuery("body").hasClass("state_mobiles");
    var $tablet = jQuery("body").hasClass("state_tablets");
    var $home = jQuery("body").hasClass("home");
    /*=====  End of Checa se é mobile  ======*/

    /*----------  Botão CTA fixo  ----------*/
    jQuery(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.b_fixedCta').css('bottom', '0px');
            $('.single-lp-cidade .zopim').addClass('mobile');
            $('.single-lp-segmento .zopim').addClass('mobile');
        } else {
            $('.b_fixedCta').css('bottom', '-160px');
            $('.single-lp-cidade .zopim').removeClass('mobile');
            $('.single-lp-segmento .zopim').removeClass('mobile');

        }

        if (!jQuery("body").hasClass("state_mobiles")) {
            var central_ajuda = jQuery("body.single-suporte .suporte-sidebar").hasClass('central-ajuda-sidebar');
            var posicao = 120;

            if (central_ajuda)
                var posicao = 10;

            function elementScrolled(elementoRecebido) {
                var docViewTop = $(window).scrollTop();
                var elemento = elementoRecebido;
                if ($(elemento) && $(elemento).offset()) {
                    var elemTop = $(elemento).offset().top + $(elemento).height();
                    return docViewTop + posicao >= elemTop;
                }
            }

            function footerScrollHeight() {
                return ($(document).height() - $(window).height()) - $(window).scrollTop()
            }


            function elementReachedFooter() {
                return footerScrollHeight() < 134;
            }

            if (central_ajuda) {
                $('.suporte-sidebar.central-ajuda-sidebar').addClass('fixado');
                $('.suporte-sidebar.central-ajuda-sidebar .es-menu-personalizado').appendTo('#nav_menu_custom-3');
                $('#nav_menu_custom-3').css('display', 'block');
                var esbanner = '.suporte-sidebar.central-ajuda-sidebar #text-8';
                var indice = '.suporte-sidebar.central-ajuda-sidebar #nav_menu_custom-3';
                var pixel_banner = 421;
                var pixel_indice = 110;
                var pixel_margin = '0';
                var elementoScroll = elementScrolled('.suporte-sidebar.central-ajuda-sidebar');
            } else {
                var esbanner = '#text-4';
                var indice = '#ezw_tco-4';
                var pixel_banner = 111;
                var pixel_indice = 312;
                var pixel_margin = '20px';
                var elementoScroll = elementScrolled('#esauce_banner_widget-3');
                $('.suporte-sidebar.central-ajuda-sidebar').removeClass('fixado');
            }
            if (elementoScroll) {
                $(esbanner).css('position', 'fixed');
                $(esbanner).css('top', elementReachedFooter() ? (pixel_banner + (footerScrollHeight() - 134)) + 'px' : pixel_banner + 'px');
                $(esbanner).css('margin-left', pixel_margin);
                $(indice).css('position', 'fixed');
                $(indice).css('top', elementReachedFooter() ? (pixel_indice + (footerScrollHeight() - 134)) + 'px' : pixel_indice + 'px');
            } else {
                $(esbanner).css('position', 'initial');
                $(esbanner).css('top', 'initial');
                $(esbanner).css('margin-left', '0px');
                $(indice).css('position', 'initial');
                $(indice).css('top', '0');
            }
        }
    });

    /*----------  Shortcode us_testimonials  ----------*/
    $('.w-testimonial .w-testimonial-h').each(function() {
        let testimonialAuthor = $(this).find('.w-testimonial-author');
        $(testimonialAuthor).prependTo(this);
    });

    //Ação botão "ver no mapa"
    $('.w-btn-ver-no-mapa').click(function() {
        if (!$('.w-tabs-section').hasClass('active'))
            $('.w-tabs-section-header').click();
        $('html, body').animate({
            scrollTop: $(".w-tabs-section-header").offset().top
        }, 300);
    })

    //Ação flecha banner home  
    $('.arrow.bounce').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#introducao").offset().top - 60
        }, 1000);
    })

    //Reordenando exames
    $('.exames__archiveItems').each(function() {
        let tabs = $('.w-tabs-sections-h');
        $(this).appendTo(tabs);
    });
    $('.w-tabs-item .abcd').click();
    if ($mobile) {
        setTimeout(function() {
            $('.search-results.post-type-archive-exames #todos .w-tabs-section-header').click();
        }, 200);
    } else {
        $('.search-results.post-type-archive-exames .todos').click();
    }

    // Post
    $('.solucao-gallery--detail').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.solucao-gallery--nav'
    });
    $('.solucao-gallery--nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.solucao-gallery--detail',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: false
    });

    // Carregar Disqus
    $('.botao-comentarios').click(function() {
        var ativo = $('.botao-comentarios').hasClass('ativo');
        if (ativo == true) {
            $('.botao-comentarios').removeClass('ativo');
            $('.l-section.for_comments').slideToggle('slow');
        } else {
            $('.botao-comentarios').addClass('ativo');
            $('.l-section.for_comments').slideToggle();
        }
    });


    $('#ekyte-testimonials .testimonial-icon').click(function() {
        var showItem = $('#ekyte-testimonials .testimonial--' + $(this)[0].dataset.attr);
        $('.testimonial').removeClass('active');
        showItem.addClass('active');
        $('.testimonial-icon').removeClass('active');
        $(this).addClass('active');
    })

    // setInterval(function() {
    //     var item = $('#ekyte-testimonials .testimonial-icon.active');
    //     var itemT = $('#ekyte-testimonials .testimonial.active');
    //     var at = item[0].dataset.attr;
    //     if(at == 4){
    //         itemT.removeClass('active');
    //         $('.testimonial--1').addClass('active');
    //         item.removeClass('active');
    //         $('.testimonial-icon--1').addClass('active');
    //     } else {
    //         itemT.removeClass('active');
    //         $('.testimonial--' + (Number(at) + 1) + '').addClass('active');
    //         item.removeClass('active');
    //         $('.testimonial-icon--' + (Number(at) + 1) + '').addClass('active');
    //     }
    //   }, 8000);



    /*=============================================
    =            Sessão Mobile            =
    =============================================*/

    if ($mobile) {
        // $('.page-id-2867 .lp-horizontal-tab').removeClass('autoresize');
        // $('.page-id-2867 .lp-horizontal-tab').addClass('autoresize');

        jQuery('.es-newlayout-container').each(function() {
            var image = $(this).find('.es-newlayout-image');
            var containerSubTitle = $(this).find('.subtext');
            var containerTitle = $(this).find('h3');
            $(image).after(containerSubTitle);
            $(image).before(containerTitle);

        });

        $(".es-newlayout-section .es-newlayout-section-internal > .vc_column-inner > .wpb_wrapper").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: false,
            autoPlayTimeout: 2000,
        });

        $('.block-testimonial--detail .cl-review').unwrap();
        $('.block-testimonial--detail .wpb_wrapper').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: 17000,
            // autoPlayTimeout: 18000,
        });

        /** Chamando os Owl Carousel */
        $(".w-testimonials-list").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: true,
            autoPlayTimeout: 2000,
        });

        $('.b_produtos_01 .b_produtos_01_content').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlayTimeout: 2000,
        });

        $('.b_produtos_01 .b_produtos_01_content').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlayTimeout: 2000,
        });

        let cards6Columns = document.querySelectorAll('.card-list__item .card__simple-6columns');
        $(cards6Columns).appendTo('.card-list .vc_inner');
        $('.card-list .vc_inner .vc_col-sm-6').remove();
        $('.card-list .vc_inner').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: true,
            autoPlayTimeout: 2000,
        });


        $('.b3-icons-text__item .w-iconbox').each(function() {
            $(this).find('.w-iconbox-link').append('<div class="w-iconbox-content"></div>');
            let iconContent = $(this).find('.w-iconbox-content');
            $(this).find('.w-iconbox-title').appendTo(iconContent);
            $(this).find('.w-iconbox-text').appendTo(iconContent);
        });
        $('.b3-icons-text__item .w-iconbox').each(function() {
            $(this).append('<div class="w-iconbox-content"></div>');
            let iconContent = $(this).find('.w-iconbox-content');
            $(this).find('.w-iconbox-title').appendTo(iconContent);
            $(this).find('.w-iconbox-text').appendTo(iconContent);
        });


        $('.b_texto_imagem').each(function() {
            $(this).find('.b_texto_imagem-img').appendTo('.b_texto_imagem-text');
        })

        $('.single-solucoes .solucao-gallery').appendTo('.single-solucoes h1');

        $('.b_tecnology-img').appendTo('.b_tecnologia-text');

        $('.como-funciona--image').prependTo('.como-funciona--content');

        // $('.feature-toright-1--image').prependTo('.feature-toright-1');
        // $('.feature-toright-2--image').prependTo('.feature-toright-2');

        $('.evolucao-section').each(function() {
            let image = $(this).find('.es-imagem');
            let text = $(this).find('.es-texto-section p');
            $(this).find('.btn-saiba-mais').appendTo(text);
            $(this).find('.es-imagem').appendTo(text);
        });

        /*** ESTEMA SAÚDE ***/
        $(window).scroll(function() {
            //Botões fixos
            fixedButtonScroll([
                '.type_sticky',
                '.actionContact',
                '.body-blog .l-subheader-cell.at_right',
                '.archive .only-mobile',
                '.tax-tipo .only-mobile',
                '.b_fixedCta'
            ]);
        });

        filterMenu('.post-type-archive-tratamentos', 'Filtrar por especialidade');
        filterMenu('.post-type-archive-medicos', 'Filtrar por especialidade');
        filterMenu('.post-type-archive-solucoes', 'Filtrar por categoria');
        filterMenu('.tax-tipo', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_tratamento', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_medico', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_exame', 'Filtrar por especialidade');

        // $('.filtro-mobile .button').on('click', function () {
        //     $(this).parent('.filtro-mobile').toggleClass('active');
        //     $('body').find('.l-sidebar').slideToggle();
        // });
        // $('.filtro-mobile h2.widgettitle').on('click', function () {
        //     $(this).toggleClass('opened');
        //     $(this).parent().find('ul').slideToggle();
        // });

        setTimeout(function() {
            $('.post-type-archive-duvidas-frequentes .l-header').addClass('bg_transparent')
        }, 200);

        //Setando o botão AGENDAR pra cima
        $('.menu-item-742').prependTo('.l-subheader-cell.at_right .w-nav-list');
        // $('.menu-item--btnAgendar').prependTo('.l-subheader-cell.at_right .w-nav-list.level_1');

        //CONTATO ordem
        // $('.card--col6').prependTo('.vc_col-sm-12 .vc_inner');
        // $('.card--col6').css('margin-bottom', '15px');

        //Blog Menu
        $('.blog-category-menu .blog-category-menu__name').click(function(e) {
            // e.preventDefault();
            // $('.mobile-header-nav').slideToggle();
            $('.blog-category-menu .w-nav-list').toggleClass('active');
        });

        // Como funciona - Section Tecnologia
        // $('.tecnologia-mkt .evolucao-section .es-imagem').each(function () {
        //     $(this).find('img').prependTo('.es-texto-section .es-texto');
        // });

        // Abrir/Fechar menu - Inicio
        $($('.state_mobiles .l-header .type_mobile .w-nav-control')).click(function() {
            if ($('.state_mobiles .l-header .type_mobile .w-nav-list.level_1').hasClass('menu-open')) {
                $('.state_mobiles .l-header .type_mobile .w-nav-list.level_1').removeClass('menu-open');
            } else {
                $('.state_mobiles .l-header .type_mobile .w-nav-list.level_1').addClass('menu-open');
            }
        });
        $('.l-main:not(l-header)').click(function() {
            if ($('.state_mobiles .l-header .type_mobile .w-nav-list.level_1').hasClass('menu-open')) {
                $('.state_mobiles .l-header .type_mobile .w-nav-control').click();
                $('.state_mobiles .l-header .type_mobile .w-nav-list.level_1').removeClass('menu-open');
            }
        });
        // Abrir/Fechar menu - Fim

        $('.eKyte-videos-section .primeiros-passos.owl-qtd-2 .primeiros-passos-no-owl').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: false,
            autoWidth: true,
            navigation: true,
        });

        /*=====  End of Sessão Mobile  ======*/

        /*=============================================
        =            Sessão Tablet (768px)            =
        =============================================*/

    } else if ($tablet) {
        filterMenu('.post-type-archive', 'Filtrar');
        filterMenu('.tax-tipo', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_tratamento', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_medico', 'Filtrar por especialidade');
        filterMenu('.tax-especialidade_exame', 'Filtrar por especialidade');

        $('.filtro-mobile .button').on('click', function() {
            $(this).parent('.filtro-mobile').toggleClass('active');
            $('body').find('.l-sidebar').slideToggle();
        });
        // $('.filtro-mobile h2.widgettitle').on('click', function () {
        //     $(this).toggleClass('opened');
        //     $(this).parent().find('ul').slideToggle();
        // });
        /*=====  End of Sessão Tablet (768px)  ======*/
    } else {

        //Blog Menu
        $('.blog-category-menu').hover(
            function() {
                $('.blog-category-menu .w-nav-list').addClass('active');
            },
            function() {
                $('.blog-category-menu .w-nav-list').removeClass('active')
            });

        $('.block-testimonial--detail .wpb_wrapper').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            mouseDrag: true,
            autoPlay: 19000,
            // autoPlayTimeout: 18000,
        });
    }



    // //Benefícios em forma de lista
    $('.w-iconbox-list').each(function() {
        $(this).append('<div class="w-iconbox-desc"></div>');
        let iconDesc = $(this).find('.w-iconbox-desc');
        $(this).find('.w-iconbox-title').appendTo(iconDesc);
        $(this).find('.w-iconbox-text').appendTo(iconDesc);
    });

    // ek-galeria
    $('.gestao-mkt .ek-galeria .w-gallery-item').each(function() {
        var texto = $(this).find('.w-gallery-item-title').text();
        if (texto == "Empresas (equipe própria)") {
            $(this).find('.w-gallery-item-title').html('<div class="w-gallery-item-title">Empresas <span class="small">(equipe própria)</span></div>');
        }
        if (texto == "Agências Digitais") {
            $(this).find('.w-gallery-item-title').html('<div class="w-gallery-item-title">Agências <br />Digitais</div>');
        }
        if (texto == "Equipes Híbridas (própria + agência)") {
            $(this).find('.w-gallery-item-title').html('<div class="w-gallery-item-title">Equipes Híbridas <span class="small">(própria + agência)</span></div>');
        }
    });

    // Criar conta - Passos - Inicio
    var currentStep = 1;
    var key = jQuery.Event("keypress");
    var $mobile = jQuery("body").hasClass("mobile");
    key.which = 9;
    key.keyCode = 9;

    function scrollToElement(element) {
        setTimeout(function() {
            jQuery('html, body').animate({
                scrollTop: jQuery(element).offset().top - 900
            }, 200);
        }, 200);
    }

    function validateRequired(step) {
        var focusedInput = false;
        jQuery('.wpcf7-not-valid').removeClass('wpcf7-not-valid');
        var erro = false;

        jQuery(".ek-etapa-" + step + " input, .ek-etapa-" + step + " select").each(function() {
            var obrigatorio = jQuery(this).hasClass('wpcf7-validates-as-required');
            if (obrigatorio == true && jQuery(this).val() == "") {
                jQuery(this).addClass('wpcf7-not-valid');
                if (!focusedInput) {
                    jQuery(this).focus();
                    // $mobile ? jQuery(this).focus() : scrollToElement('#'+jQuery(this).attr('id'));
                    focusedInput = true;
                }
                erro = true;
            }
        });

        return erro;
    }
    $('.eKyte-section-main.ek-criar-conta.ek-formulario-section .contact-form .btn-proximo').on('click', function() {
        var erro = validateRequired(currentStep);
        if (!erro) {
            currentStep += 1;
            gotToStep(currentStep);

            if (currentStep > 1) {
                jQuery(".eKyte-section-main.ek-criar-conta.ek-formulario-section .contact-form .btn-voltar").show();
            }

            if (currentStep == 2) {
                // scrollToElement(".ek-etapa-2");
            }
        }
    });
    jQuery(".eKyte-section-main.ek-criar-conta.ek-formulario-section .contact-form .btn-voltar").on("click", function() {
        currentStep -= 1;
        gotToStep(currentStep);

        if (currentStep == 1) {
            jQuery(this).hide();
            // scrollToElement(".ek-etapa-1");
        }

        if (currentStep == 2) {
            // scrollToElement(".ek-etapa-2");
        }

        if (jQuery('.wpcf7-response-output').hasClass('wpcf7-mail-sent-ng')) {
            jQuery('.wpcf7-mail-sent-ng').hide();
        }
    });

    function gotToStep(step) {
        jQuery(".ek-etapa-1").hide();
        jQuery(".ek-etapa-2").hide();
        jQuery(".ek-etapa-" + step).show();

        if (step == 1) {
            jQuery(".eKyte-section-main.ek-criar-conta.ek-formulario-section .contact-form .btn-voltar").hide();
            jQuery(".eKyte-section-main.ek-criar-conta.ek-formulario-section .contact-form .plano input#plano").focus();
        }

        if (step == 2) {
            // xxxxxxx
        }
    }
    $('.eKyte-section-main.ek-criar-conta.ek-formulario-section input, .eKyte-section-main.ek-criar-conta.ek-formulario-section select').each(function() {
        $(this).change(function() {
            if ($(this).val() != "") {
                $(this).removeClass('wpcf7-not-valid');
            }
        });
    });
    // Criar conta - Passos - Fim

    $('.eKyte-section-main.ek-criar-conta.ek-tabela-section.ek-tabela-preco .ek-tabela .w-pricing-item.type_default:nth-child(3) .w-pricing-item-footer .w-btn').each(function() {
        $(this).replaceWith($('<div class="w-btn style_raised color_light icon_none">' + this.innerHTML + '</div>'));
    });

    // Meta GA
    $(".evento-meta").each(function() {
        $('input[name="solucao-evento-meta"]').val("Site - Contato");
    });

    // Assunto Email
    $(".assunto-email").each(function() {
        var assunto_id = $(this).attr('id');

        switch (assunto_id) {
            case "assunto-email-1345":
                valor = "eKyte - Soluções - Geral";
                break;
            case "assunto-email-1353":
                valor = "eKyte - Soluções - Estratégia";
                break;
            case "assunto-email-1764":
                valor = "eKyte - Soluções - Produção";
                break;
            case "assunto-email-1840":
                valor = "eKyte - Soluções - Performance";
                break;
            case "assunto-email-1849":
                valor = "eKyte - Soluções - Conhecimento";
                break;
            case "assunto-email-176":
                valor = "eKyte - Contato";
                break;
            case "assunto-email-1450":
                valor = "eKyte - Assinar";
                break;
            case "assunto-email-2212":
                valor = "eKyte - Estratégia - Planejamento de Campanhas";
                break;
            case "assunto-email-2178":
                valor = "eKyte - Produção - Tarefas e Criação";
                break;
            case "assunto-email-2254":
                valor = "eKyte - Produção - Colaboração";
                break;
            case "assunto-email-2227":
                valor = "eKyte - Produção - Biblioteca Digital";
                break;
            case "assunto-email-2236":
                valor = "eKyte - Estratégia - Branding";
                break;
            case "assunto-email-2246":
                valor = "eKyte - Produção - Atendimento";
                break;
            case "assunto-email-1232":
                valor = "eKyte - Como Funciona";
                break;
            case "assunto-email-2867":
                valor = "eKyte - Consultoria Marketing Digital";
                break;
            case "assunto-email-3373":
                valor = "eKyte - Comparativo eKyte";
                break;
            case "assunto-email-3425":
                valor = "eKyte - Produção - Apontamento e Produtividade";
                break;
            case "assunto-email-3529":
                valor = "eKyte - Produção - Publicação de Anúncios";
                break;
            case "assunto-email-3501":
                valor = "eKyte -Performance - Integração com Mídias Digitais";
                break;
            case "assunto-email-3518":
                valor = "eKyte -Performance - Data-Driven Marketing 360";
                break;
            default:
                valor = "eKyte - Contato";
                break;
        }

        $('.assunto-email').val(valor);
    });

    jQuery(".action--contact-atendimento-cliente.item-chat-online").on("click", function(event) {
        event.preventDefault();
        octadesk.chat.toggle();
    });

    jQuery(document).ready(function() {
        jQuery(".lp-main-button").on("click", function(event) {
            jQuery('html,body').animate({
                scrollTop: jQuery("#B_BANNER_FINAL").offset().top - 100
            }, 'slow');
            event.preventDefault();
        });
    });

    $('.eKyte-ferramentas-section').each(function() {
        if ($(this)) {
            var pagina = $('.eKyte-ferramentas-section .ek-ferramenta-item-id').val();

            switch (pagina) {
                case "ferramenta-id-1353":
                    item = "branding";
                    section = "estrategia";
                    break;

                case "ferramenta-id-2236":
                    item = "branding";
                    section = "estrategia";
                    break;

                case "ferramenta-id-2212":
                    item = "planejamento-de-campanhas";
                    section = "estrategia";
                    break;

                case "ferramenta-id-1764":
                    item = "tarefas-e-criacao";
                    section = "producao";
                    break;

                case "ferramenta-id-2178":
                    item = "tarefas-e-criacao";
                    section = "producao";
                    break;

                case "ferramenta-id-2254":
                    item = "colaboracao-e-aprovacao";
                    section = "producao";
                    break;

                case "ferramenta-id-2246":
                    item = "atendimento";
                    section = "producao";
                    break;

                case "ferramenta-id-2227":
                    item = "biblioteca-digital";
                    section = "producao";
                    break;

                case "ferramenta-id-3425":
                    item = "apontamento-e-produtividade";
                    section = "producao";
                    break;

                case "ferramenta-id-3529":
                    item = "publicacao-de-anuncios";
                    section = "producao";
                    break;

                case "ferramenta-id-1840":
                    item = "integracao";
                    section = "performance";
                    break;

                case "ferramenta-id-3501":
                    item = "integracao";
                    section = "performance";
                    break;

                case "ferramenta-id-3518":
                    item = "data-driven-360";
                    section = "performance";
                    break;

                case "ferramenta-id-5224":
                    item = "business-intelligence";
                    section = "performance";
                    break;

                default:
                    item = "guia-marketing-digital";
                    section = "conhecimento";
                    break;
            }

            if (pagina == 'ferramenta-id-1345') {
                item = 'branding';
                section = 'estrategia';
            }

            $('.eKyte-ferramentas-section .ek-ferramenta-item .' + item).addClass('ek-ferramenta-item-current');
            var click = $('.eKyte-ferramentas-section .ek-ferramenta-item .' + item + '.ek-ferramenta-item-current').data('solucao');

            if (!$mobile)
                $('.eKyte-ferramentas-section a[href="#' + click + '"]').click();

            switch (pagina) {
                case "ferramenta-id-1345":
                    id = 'ferramenta-id-1345';
                    break;

                case "ferramenta-id-1353":
                    id = 'ferramenta-id-1353';
                    break;

                case "ferramenta-id-1764":
                    id = 'ferramenta-id-1764';
                    break;

                case "ferramenta-id-1840":
                    id = 'ferramenta-id-1840';
                    break;

                case "ferramenta-id-1849":
                    id = 'ferramenta-id-1849';
                    break;

                default:
                    id = "";
                    break;
            }

            if (pagina == id)
                $('.eKyte-ferramentas-section .ek-ferramenta-item-current').removeClass('ek-ferramenta-item-current');
        }
    });

    $('.tabela-teste-gratis .ek-tabela .w-pricing-item-footer').each(function() {
        $(this).append('<div class="teste-gratis-recursos">Conhecer recursos e comparar planos <i class="fa fa-angle-right"></i></div>');
    });

    $('.tabela-teste-gratis .ek-tabela .type_default:nth-child(3) .w-pricing-item-footer').each(function() {
        $(this).find('.teste-gratis-recursos').html('');
    });

    $(".tabela-teste-gratis .teste-gratis-recursos").on("click", function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".tabela-comparar-planos-acordeon").offset().top - 100
        }, 'slow');

        setTimeout(function() {
            $('.tabela-comparar-planos-acordeon a').click();
        }, 2200);
    });

    // Alterando texto para Teste Grátis
    $('.w-btn .w-btn-label').each(function() {
        if ($(this).text() == 'Assinar o eKyte')
            $(this).text('Comece já');

        if ($(this).text() == 'Ver Preço e Assinar')
            $(this).text('Ver Preço e Comece já');
    });
    $('.menu-item a').each(function() {
        if ($(this).text() == 'Assinar >')
            $(this).text('Comece já >');
    });
    $('.w-iconbox-link .w-iconbox-title').each(function() {
        if ($(this).text() == 'Assinar')
            $(this).text('Comece já');
    });

    $('.primeiros-passos .primeiros-passos-owl').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        mouseDrag: true,
        autoPlay: false,
        autoWidth: true,
        navigation: true,
    });

    // Script para MagnificPopup - Vídeo - Inicio
    var $botao_play = jQuery('.botao-play.video').attr('id');
    jQuery('.botao-play.video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                dailymotion: {
                    index: 'youtube.com',
                    id: function(url) {
                        var m = url.match(/^.+youtube.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                        if (m !== null) {
                            if (m[4] !== undefined) {
                                return m[4];
                            }
                            return m[2];
                        }
                        return null;
                    },
                    src: '//www.youtube.com/embed/' + $botao_play + '?autoplay=1'
                }
            }
        }
    });
    // Script para MagnificPopup - Vídeo - Fim
})

jQuery(function($) {
    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };
    $('.phone_with_ddd').mask(SPMaskBehavior, spOptions);
});

//Função para menu filtro
function filterMenu(area, text) {
    //Filtro Soluções
    jQuery(area + ' .l-main.content').after('<div class="only-mobile filtro-mobile"><div class="button"><i class="material-icons">more_vert</i><span>' + text + '</span></div><div class="filter"></div></div>'),
        jQuery(area + '.estheme .l-sidebar').appendTo('.filtro-mobile .filter')
}

function fixedButtonScroll(areas) {
    //Valida se chegou ao bottom da página
    areas.map(area => {
        if (jQuery(window).scrollTop() >= jQuery('body').offset().top + jQuery('body').outerHeight() - window.innerHeight) {
            jQuery(area).css('bottom', '-300px');
        } else {
            jQuery(area).css('bottom', '0px');
        }
    })
}