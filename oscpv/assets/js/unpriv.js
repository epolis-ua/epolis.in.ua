function unpriv() {
    var $priv = document.getElementById("priv"),
        $minus = document.getElementById("minus"),
        $bpriv = document.getElementById("bpriv"),
        $regAbr = document.getElementById("registeredAbroad");
        $uaregCity = document.getElementById("uaregCity");
        $abrregCity = document.getElementById("abrregCity");
        $type = $("#vehicleForm input[name='type']:checked").val();
        $typev = $("#vehicleForm input[name='vehicle']:checked").val();
    if ((($type === "6") || $regAbr.checked) || (($typev !== "0") && ($typev !== "4"))){
        $priv.checked = false;
        $minus.classList.remove("fa-check-square-o");
        $minus.classList.add("fa-minus-square-o");
        $bpriv.style.cursor = "auto";
    } else {
        $minus.classList.remove("fa-minus-square-o");
        $minus.classList.add("fa-check-square-o");
        $priv.checked = false;
        $bpriv.style.cursor = "";
    }
    if ($regAbr.checked) {
        $uaregCity.style.display = "none";
        $abrregCity.style.display = "inline-block";
    } else {
		$uaregCity.style.display = "inline-block";
        $abrregCity.style.display = "none";
    }
}
