jQuery(document).ready(function($) {
    var signUrl = 'https://app.ekyte.com/#/signup';
    var slider = $('#calculator-users-slider');
    var sliderMinus = $('#calculator-minus');
    var sliderPlus = $('#calculator-plus');
    var onboardingRadio = $("input[name=onboarding]");
    var calculatorBtn = $('#calculator-btn');

    $('.w-pricing-switch-plano:first-child').addClass('selected');

    jQuery('#calculator-users-slider').val(5);

    sliderMinus.click(function() {
        var newVal = parseInt(slider.val()) - 1;
        if (newVal < 5)
            return;
        slider.val(newVal);
        setPrice();
    });

    sliderPlus.click(function() {
        var newVal = parseInt(slider.val()) + 1;
        if (newVal > 100)
            return;
        slider.val(newVal);
        setPrice();
    });

    $('.w-pricing-switch-plano').click(function() {
        $('.w-pricing-switch-plano').removeClass('selected');
        $(this).addClass('selected');
        var performancePanel = $('.performance-panel');
        var fixedPlanValue = jQuery(this).attr("fixedPlanValue");
        var performanceValue = performancePanel.find('#performance-value');
        var priceTotal = performancePanel.find('.price-total');
        var btn = performancePanel.find('.w-btn');
        btn.attr("planId", jQuery(this).attr("planId"));
        priceTotal.attr("fixedPlanValue", fixedPlanValue);
        setPerformanceValue(performanceValue, fixedPlanValue)
        setSinglePrice(priceTotal);

        $('.integration-status').text("Integrações com " + (fixedPlanValue == 250 ? "até 20 canais" : "canais ilimitados"));
    });
});

function maxLengthCheck(object) {
    if (object.value > 100)
        object.value = 100;
    else if (object.value < 5)
        object.value = 5;
    setPrice();
}

function setPrice() {
    var priceTotal = jQuery('.price-total');
    var slider = jQuery('#calculator-users-slider');
    priceTotal.each(function() {
        var value = parseInt(slider.val());
        var planValue = jQuery(this).attr("planValue");
        var fixedPlanValue = jQuery(this).attr("fixedPlanValue");
        var fixedValue = fixedPlanValue ? parseInt(fixedPlanValue) : 0;
        var finalValue = (parseInt(planValue) * parseInt(value)) + fixedValue;
        if (jQuery('.price-calculator-v3').length > 0) {
            if (jQuery(this).hasClass("price-total-performance") && value < 10)
                return;
            else
                jQuery(this).text("Total de R$" + finalValue + " / mês");
        } else
            jQuery(this).text("Total de R$" + finalValue + " / mês");
    });
}

function setSinglePrice(element) {
    var slider = jQuery('#calculator-users-slider');
    var value = parseInt(slider.val());
    var planValue = element.attr("planValue");
    var fixedPlanValue = element.attr("fixedPlanValue");
    var fixedValue = fixedPlanValue ? parseInt(fixedPlanValue) : 0;
    var finalValue = (parseInt(planValue) * parseInt(value)) + fixedValue;

    element.text("Total de R$" + finalValue + " / mês");
}

function setPerformanceValue(element, fixedPlanValue) {
    console.log(fixedPlanValue);
    console.log(element);
    element.attr("fixedPlanValue", fixedPlanValue);
    element.text("+ " + fixedPlanValue + " para toda equipe");
}

const selectDropdown = document.getElementById('selectUsers');
selectDropdown.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    maxLengthCheckv2(selectedValue);
});

function maxLengthCheckv2(value) {
    const valueProductivityAnual = 49;
    const valueProductivityMonth = 65;
    const valuePerformanceAnual = 412;
    const valuePerformanceMonth = 550;
    // price-anual-total-100
    // price-month-100
    // price-month-total-100

    // jQuery('.price-anual-6240').text("R$" + valuePerformanceAnual * value);
    // jQuery('.price-month-6240').text("R$" + valueProductivityMonth);
    if (value == '-') {
        jQuery('.price-calculated').css("display", "none");
        jQuery('.price-anual-total-6240').text("para 100 canais /mês no plano mensal");
        jQuery('.price-anual-total-6239').text("R$ 550 para 100 canais na cobrança mensal");
        jQuery('.w-pricing-item-price').removeClass('w-pricing-item-price-calculated');
    } else if (value == '50') {
        jQuery('.price-calculated').css("display", "none");
        jQuery('.discount-tag').css("display", "none");
        jQuery('.w-pricing-item-price').removeClass('w-pricing-item-price-calculated');
        jQuery('.price-anual-6240').text("Consulte condições especiais");
        jQuery('.price-container-6240').addClass('price-container-special');
        jQuery('.price-container-6239').addClass('price-container-special');
        jQuery('.price-container-6240 .price-type').css("display", "none");
        jQuery('.price-anual-total-6240 strong').text(" ");
        jQuery('.price-anual-total-6240 span').text(" ");
        jQuery('.price-month-total-6240 strong').text(" ");
        jQuery('.price-calculated').css("display", "none");
        jQuery('.price-anual-6239').text("Consulte condições especiais");
        jQuery('.price-container-6239 .price-type').css("display", "none");
        jQuery('.price-anual-total-6239').text("  ");
        jQuery('.price-month-total-6239').text("  ");
    } else {
        jQuery('.price-calculated').css("display", "block");
        jQuery('.discount-tag').css("display", "block");
        jQuery('.price-anual-6240').text("R$ 49");
        jQuery('.w-pricing-item-price').addClass('w-pricing-item-price-calculated');
        jQuery('.price-container-6240').removeClass('price-container-special');
        jQuery('.price-container-6239').removeClass('price-container-special');
        jQuery('.price-container-6240 .price-type').css("display", "block");
        jQuery('.price-anual-total-6240 strong').text("Total R$" + valueProductivityAnual * value * 12 + " / ano para " + value + " usuários");
        jQuery('.price-anual-total-6240 span').text("(equivale a R$ " + valueProductivityAnual * value + " / mês)");
        jQuery('.price-month-total-6240 strong').text("Total R$" + valueProductivityMonth * value + " / mês para " + value + " usuários");
        jQuery('.price-container-6239 .price-type').css("display", "block");
        jQuery('.price-anual-6239').text("R$ 65");
        // jQuery('.price-anual-total-6239').text("Total R$" + ((valueProductivityAnual * value) + valuePerformanceAnual) + " / mês na cobrança anual");
        // jQuery('.price-month-total-6239').text("Total R$" + ((valueProductivityMonth * value) + valuePerformanceMonth) + " / mês na cobrança mensal");
        jQuery('.price-anual-total-6239').text("  ");
        jQuery('.price-month-total-6239').text("  ");
    }

    // setPricev2();
}


function setPricev2() {


    var priceTotal = jQuery('.price-total');
    var slider = jQuery('#calculator-users-slider');
    priceTotal.each(function() {
        var value = parseInt(slider.val());
        var planValue = jQuery(this).attr("planValue");
        var fixedPlanValue = jQuery(this).attr("fixedPlanValue");
        var fixedValue = fixedPlanValue ? parseInt(fixedPlanValue) : 0;
        var finalValue = (parseInt(planValue) * parseInt(value)) + fixedValue;
        if (jQuery('.price-calculator-v3').length > 0) {
            if (jQuery(this).hasClass("price-total-performance") && value < 10)
                return;
            else
                jQuery(this).text("Total de R$" + finalValue + " / mês");
        } else
            jQuery(this).text("Total de R$" + finalValue + " / mês");
    });
}