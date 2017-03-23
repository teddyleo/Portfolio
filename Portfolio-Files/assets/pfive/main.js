var currentp5 = ".mazegen";

function toggle(id) {
    if (id == 1) {
        $(currentp5).hide();
        $(currentp5 + "button").removeClass("btn-primary");
        $(".mazegen").show();
        $(".mazegenbutton").addClass("btn-primary");
        currentp5 = ".mazegen";
    }
    if (id == 2) {
        $(currentp5).hide();
        $(currentp5 + "button").removeClass("btn-primary");
        $(".gameoflife").show();
        $(".gameoflifebutton").addClass("btn-primary");
        currentp5 = ".gameoflife";
    }
    if (id == 3) {
        $(currentp5).hide();
        $(currentp5 + "button").removeClass("btn-primary");
        $(".treegen").show();
        $(".treegenbutton").addClass("btn-primary");
        currentp5 = ".treegen";
    }
}