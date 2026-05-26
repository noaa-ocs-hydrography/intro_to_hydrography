//new sniffer code from Flash9

var hasRightVersion = 0;
var AC_FL_RunContent = 0;
var DetectFlashVer = 0;

// Globals
// Major version of Flash required
var requiredMajorVersion = 9;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Revision of Flash required
var requiredRevision = 24;

function checkver() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="z-index:5; position:relative; border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">FlashPlayer Plugin Warning</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;"> This site makes use of the Adobe Flash Player plug-in to display some of its content. This browser does not have the Flash Player installed or it is using an older, incompatible version.</p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Please visit <a href="http://www.adobe.com/go/getflash/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> to get the latest update.</p></div>');
	}
}

function checkver_content() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">FlashPlayer Plugin Warning</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;"> This site makes use of the Adobe Flash Player plug-in to display some of its content. This browser does not have the Flash Player installed or it is using an older, incompatible version.</p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Please visit <a href="http://www.adobe.com/go/getflash/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> to get the latest update.</p></div>');
	}
}

function checkver_es() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="z-index:5; position:relative; border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">Aviso sobre el complemento Flash Player</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Este sitio utiliza el complemento Adobe Flash Player para visualizar parte del contenido. Este navegador no tiene Flash Player instalado, o bien está utilizando una versión antigua que no es compatible.</p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Visite <a href="http://www.adobe.com/es/flashplayer/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> para obtener la versión más reciente.</p></div>');
	}
}

function checkver_content_es() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">Aviso sobre el complemento Flash Player</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Este sitio utiliza el complemento Adobe Flash Player para visualizar parte del contenido. Este navegador no tiene Flash Player instalado, o bien está utilizando una versión antigua que no es compatible.</p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Visite <a href="http://www.adobe.com/es/flashplayer/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> para obtener la versión más reciente.</p></div>');
	}
}

function checkver_fr() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="z-index:5; position:relative; border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">Avertissemement FlashPlayer Plugin</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Ce site doit utiliser le Plugin d&acute;Adobe Player pour afficher quelques elements du contenu. Ce navigateur n&acute;a pas Flash Player d&acute;installer ou utilise une veille version, une version incompatible. </p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Veuillez visiter les site <a href="http://www.adobe.com/fr/flashplayer/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> pour obtenir la plus recente version.</p></div>');
	}
}

function checkver_content_fr() {
	hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
	if (!hasRightVersion) {
	document.write('<div id="flash_warning" style="border: 1px solid #000000; margin: 0px auto 6px; padding: 4px 4px 12px; background-color: #FFFF66; width: 400px; color: #000000; text-align: center;"><h3 style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; color: #000000;">Avertissemement FlashPlayer Plugin</h3><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Ce site doit utiliser le Plugin d&acute;Adobe Player pour afficher quelques elements du contenu. Ce navigateur n&acute;a pas Flash Player d&acute;installer ou utilise une veille version, une version incompatible.</p><p style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;">Veuillez visiter les site <a href="http://www.adobe.com/fr/flashplayer/" style="background-color: #FFFF66;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; color: #000000;text-decoration:underline;">Adobe.com</a> pour obtenir la plus recente version.</p></div>');
	}
}