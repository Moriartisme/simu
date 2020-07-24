$(".couple").click(function(){
  $("#column-couple, #column-couple-2, .simulateur-header-2").show();
});
$(".alone").click(function(){
  $("#column-couple, #column-couple-2, .simulateur-header-2").hide();
});

$(document).ready(function() {
  $("#copy-revenu").click(function() {
    var target = $(this).closest(".revenus");
    target.clone(true, true).appendTo(target.parent());
  });
});
$(document).ready(function() {
  toggleFields($(".revenus").first());
  $(".revenu-type").change(function() {
    toggleFields($(this).closest(".revenus"));
    //toggleFields2();
  });

});

function toggleFields(wrapper) {
  if (wrapper.find(".revenu-type").val() === "option-1")
    wrapper.find(".option-a").show();
  else
    wrapper.find(".option-a").hide();
  if (wrapper.find(".revenu-type").val() === "option-2")
    wrapper.find(".option-b").show();
  else
    wrapper.find(".option-b").hide();
  if (wrapper.find(".revenu-type").val() === "option-3")
    wrapper.find(".option-c").show();
  else
    wrapper.find(".option-c").hide();
  if (wrapper.find(".revenu-type").val() === "option-4")
    wrapper.find(".option-d").show();
  else
    wrapper.find(".option-d").hide();
}

$(document).ready(function() {
  $("#copy-charges").click(function() {
    var target = $(this).closest(".charges");
    target.clone(true, true).appendTo(target.parent());
  });
});
$(document).ready(function() {
  toggleFields2($(".charges").first());
  $(".charges-type").change(function() {
    toggleFields2($(this).closest(".charges"));
    //toggleFields2();
  });

});

function toggleFields2(wrapper) {
  if (wrapper.find(".charges-type").val() === "option-10")
    wrapper.find(".option-e").show();
  else
    wrapper.find(".option-e").hide();
  if (wrapper.find(".charges-type").val() === "option-11")
    wrapper.find(".option-f").show();
  else
    wrapper.find(".option-f").hide();
  if (wrapper.find(".charges-type").val() === "option-12")
    wrapper.find(".option-g").show();
  else
    wrapper.find(".option-g").hide();
  if (wrapper.find(".charges-type").val() === "option-13")
    wrapper.find(".option-h").show();
  else
    wrapper.find(".option-h").hide();
  if (wrapper.find(".charges-type").val() === "option-14")
    wrapper.find(".option-i").show();
  else
    wrapper.find(".option-i").hide();
  if (wrapper.find(".charges-type").val() === "option-15")
    wrapper.find(".option-j").show();
  else
    wrapper.find(".option-j").hide();
  if (wrapper.find(".charges-type").val() === "option-16")
    wrapper.find(".option-k").show();
  else
    wrapper.find(".option-k").hide();
}

var ratesValue = document.querySelector("#rates");
document.querySelector("#dureeInputId").onchange = function() {
  if(this.value >= 2 && this.value <= 9) {
    ratesValue.value = 0.75;
  }else if(this.value >= 10 && this.value <= 11) {
    ratesValue.value = 0.9;
  }else if(this.value >= 12 && this.value <= 14) {
    ratesValue.value = 1;
  }else if(this.value >= 15 && this.value <= 19) {
    ratesValue.value = 1.1;
  }else if(this.value >= 20 && this.value <= 24) {
    ratesValue.value = 1.3;
  }else if(this.value >= 25 && this.value <= 29) {
    ratesValue.value = 1.65;
  }else {
    ratesValue.value = 2.18;
  }
};