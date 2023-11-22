'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">link-task documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' : 'data-bs-target="#xs-components-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' :
                                            'id="xs-components-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsCardItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsCardItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PillTabItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PillTabItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceCardItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceCardItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' :
                                        'id="xs-injectables-links-module-CoreModule-243cf4f416fd993838e385d31d5d52d6f5d51a40dd6b84fe6ea0d07dfe3f280260d6f2113617d1c0815688263ebb69599ee52c95bb525f4945ba17ceab8f83c6"' }>
                                        <li class="link">
                                            <a href="injectables/ThingsWeDoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThingsWeDoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' : 'data-bs-target="#xs-components-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' :
                                            'id="xs-components-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' }>
                                            <li class="link">
                                                <a href="components/HighlightBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LatestNewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatestNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThingsWeDoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThingsWeDoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' : 'data-bs-target="#xs-injectables-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' :
                                        'id="xs-injectables-links-module-HomeModule-689007c3f43c70a1960804e2f15018938204a24a953ab067ca35a77c0e38b2cd3873544ac868a73e99941c2c0751b7796d9529739627f702feb577e00e190737"' }>
                                        <li class="link">
                                            <a href="injectables/BannerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BannerService.html" data-type="entity-link" >BannerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link" >NewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThingsWeDoService.html" data-type="entity-link" >ThingsWeDoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MainNavigator.html" data-type="entity-link" >MainNavigator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/News.html" data-type="entity-link" >News</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsCategory.html" data-type="entity-link" >NewsCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsCategoryResponse.html" data-type="entity-link" >NewsCategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsResponse.html" data-type="entity-link" >NewsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Service.html" data-type="entity-link" >Service</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServicesResponse.html" data-type="entity-link" >ServicesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Slide.html" data-type="entity-link" >Slide</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SlideResponse.html" data-type="entity-link" >SlideResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});