var app = angular.module("app", ["ngRoute"]);

app.controller('MainCtrl', ['$scope', function ($scope) {
  console.log(1);
  $scope.initMenu = function(){
    console.log(2);
    if (typeof mCustomScrollbar != "undefined") {
      console.log(3);
      calcHeightItens();

      $("#nav-projeto").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600,
        axis: "y"
      });

      $(window).resize(function(){
        calcHeightItens();
        $("#nav-projeto").mCustomScrollbar("update");
      });
    }
  }
  $scope.initTop = function(){
    calcHeightItens();
    if (typeof mCustomScrollbar != "undefined") {
      $("#top-navbar").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600,
        axis: "x"
      });
  
      $(window).resize(function(){
        window.calcHeightItens();
        $("#top-navbar").mCustomScrollbar("update");
      });
    }
  }
}]);

app.controller('GlobalCtrl', function ($scope, $route, $location) {
  $("#nav-projeto .nav-itens .active").removeClass("active");
  $("#nav-projeto .nav-item a[href='#!"+$location.path()+"']").parent().addClass("active");

  if (typeof hljs != "undefined") {
		//hljs.initHighlightingOnLoad();
		//hljs.initLineNumbersOnLoad();

		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block);
			if(!$(block).hasClass("nonumber")){
				hljs.lineNumbersBlock(block);
			}
		});
	}
}); 

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./view/um-introducao.html",
      controller:"GlobalCtrl"
    })  
    .when("/um-src-app-component-ts", {
          templateUrl: "./view/um-src-app-component-ts.html",
          controller:"GlobalCtrl"
        })
    
    .when("/src-app-component-html", {
      templateUrl: "./view/src-app-component-html.html",
      controller:"GlobalCtrl"
    })
    .when("/src-interfaces-lembrete-ts", {
      templateUrl: "./view/src-interfaces-lembrete-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-compartilhado-error-msg-error-msg-component-ts", {
      templateUrl: "./view/src-compartilhado-error-msg-error-msg-component-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-compartilhado-error-msg-error-msg-component", {
      templateUrl: "./view/src-compartilhado-error-msg-error-msg-component.html",
      controller:"GlobalCtrl"
    })
    
    .when("/src-environments-environments-ts", {
      templateUrl: "./view/src-environments-environments-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-services-lembrete-service-ts", {
      templateUrl: "./view/src-services-lembrete-service-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-lista-lembrete-lista-lembrete", {
      templateUrl: "./view/src-paginas-lista-lembrete-lista-lembrete.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-lista-lembrete-lista-lembrete-html", {
      templateUrl: "./view/src-paginas-lista-lembrete-lista-lembrete-html.html",
      controller:"GlobalCtrl"
    })
    .when("/src-app-compartilhado-form-lembrete-form-lembrete-component-ts", {
      templateUrl: "./view/src-app-compartilhado-form-lembrete-form-lembrete-component-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-app-compartilhado-form-lembrete-form-lembrete-component-html", {
      templateUrl: "./view/src-app-compartilhado-form-lembrete-form-lembrete-component-html.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-criar-lembrete-criar-lembrete-component-ts", {
      templateUrl: "./view/src-paginas-criar-lembrete-criar-lembrete-component-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-criar-lembrete-criar-lembrete-component-html", {
      templateUrl: "./view/src-paginas-criar-lembrete-criar-lembrete-component-html.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-editar-lembrete-editar-lembrete-component-ts", {
      templateUrl: "./view/src-paginas-editar-lembrete-editar-lembrete-component-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-paginas-editar-lembrete-editar-lembrete-component-html", {
      templateUrl: "./view/src-paginas-editar-lembrete-editar-lembrete-component-html.html",
      controller:"GlobalCtrl"
    })
    .when("/src-app-routing-module-ts", {
      templateUrl: "./view/src-app-routing-module-ts.html",
      controller:"GlobalCtrl"
    })
    .when("/src-app-module-ts", {
      templateUrl: "./view/src-app-module-ts.html",
      controller:"GlobalCtrl"
    })

    
    
    .when('/outro', { template: 'no outro' });
    //.otherwise({ redirectTo: './view/introducao.html' })
});

app.component('barraNavegacao', {
  templateUrl: './templates/navigationBar.html'
})

app.component('menuTopo', {
  templateUrl: './templates/menuTopo.html'
})

//angular.bootstrap(document, [ app.name ])