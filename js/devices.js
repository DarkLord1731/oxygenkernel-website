var devicesElement = document.getElementById("devices");
var versionsElement = document.getElementById("versions");
var kernelsElement = document.getElementById("kernels");
var downloadElement = document.getElementById("download");
var downloadTitleElement = document.getElementById("downloadTitle");
var downloadDateElement = document.getElementById("downloadDate");
var downloadChangelogElement = document.getElementById("downloadChangelog");

var DivTxt = new Array()
DivTxt[0] = "For all TW based 8.0 and 8.1 ROMs"
DivTxt[1] = "For all TW based 8.0 and 8.1 ROMs<br>INSTALL ONLY IF YOU HAVE PROBLEMS WITH WIFI"
DivTxt[2] = "For all AOSP based 8.1 and 9 ROMs"

var devices = {

/*
 *  Samsung A6
 */
 "Samsung A6": {
 	"TW-OREO": {
 		"1.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/a6lte/TW/8.0%2B/Oxygen-Kernel-a6lte-v1.0.131-TW-8.0%2B.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fa6lte%2FTW%2F8.0%252B%2FOxygen-Kernel-a6lte-v1.0.131-TW-8.0%252B.zip%2Fdownload%3Fuse_mirror%3Dliquidtelecom%26r%3Dhttps%253A%252F%252Fsourceforge.net%252Fprojects%252Foxygen-kernel%252Ffiles%252Fa6lte%252FTW%252F8.0%25252B%252FOxygen-Kernel-a6lte-v1.0.131-TW-8.0%25252B.zip%252Fdownload&ts=1548574884",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Initial Release</li> </ol>"
 		},
 	},
 },

/*
 *  Samsung J6
 */
 "Samsung J6": {
 	"TW-OREO": {
 		"1.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j6lte/TW/8.0/Oxygen-Kernel-j6lte-v1.0.131-TW-8.0.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj6lte%2FTW%2F8.0%2FOxygen-Kernel-j6lte-v1.0.131-TW-8.0.zip%2Fdownload&ts=1548573439",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Initial Release</li> </ol>"
 		},
 	},
 },


/*
 *  Samsung J7 2016
 */
 "Samsung J7 2016": {
 	"TW-OREO": {
 		"4.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7xelte/TW/8.1/Oxygen-Kernel-j7xelte-v4.0.131-TW-8.1.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7xelte%2FTW%2F8.1%2FOxygen-Kernel-j7xelte-v4.0.131-TW-8.1.zip%2Fdownload&ts=1548574032",
 			"date": "12-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 
 
 	"TW-Oreo-Legacy-WiFi": {
 		"4.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7xelte/TW/8.0/Oxygen-Kernel-j7xelte-V4.0.131-TW-8.0.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7xelte%2FTW%2F8.0%2FOxygen-Kernel-j7xelte-V4.0.131-TW-8.0.zip%2Fdownload&ts=1548574048",
 			"date": "12-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},

 	"AOSP": {
 		"4.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7xelte/AOSP/Oxygen-Kernel-j7xelte-v4.0.131-AOSP.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7xelte%2FAOSP%2FOxygen-Kernel-j7xelte-v4.0.131-AOSP.zip%2Fdownload&ts=1548574068",
 			"date": "12-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 },

/*
 *  Samsung J7 NXT
 */
 "Samsung J7 NXT": {
 	"TW-OREO": {
 		"3.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7velte/TW/Oxygen-Kernel-j7velte-v3.0.131-TW-8.1.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7velte%2FTW%2FOxygen-Kernel-j7velte-v3.0.131-TW-8.1.zip%2Fdownload&ts=1548573618",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 
 
 	"TW-OREO-Legacy-WiFi": {
 		"3.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7velte/TW/8.0/Oxygen-Kernel-j7velte-v3.0.131-TW-8.0.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7velte%2FTW%2F8.0%2FOxygen-Kernel-j7velte-v3.0.131-TW-8.0.zip%2Fdownload&ts=1548573599",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},

 	"AOSP": {
 		"3.0.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7velte/AOSP/Oxygen-Kernel-j7velte-v3.0.131-AOSP.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7velte%2FAOSP%2FOxygen-Kernel-j7velte-v3.0.131-AOSP.zip%2Fdownload&ts=1548573650",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 },

/*
 *  Samsung J7 Prime
 */
 "Samsung J7 Prime": {
 	"TW-OREO": {
 		"5.1.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/on7xelte/TW/8.1/Oxygen-Kernel-on7xelte-v5.1.131-TW-8.1.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fon7xelte%2FTW%2F8.1%2FOxygen-Kernel-on7xelte-v5.1.131-TW-8.1.zip%2Fdownload&ts=1548573784",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 
 
 	"TW-OREO-Legacy-WiFi": {
 		"5.1.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/on7xelte/TW/8.0/Oxygen-Kernel-on7xelte-v5.1.131-TW-8.0.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fon7xelte%2FTW%2F8.0%2FOxygen-Kernel-on7xelte-v5.1.131-TW-8.0.zip%2Fdownload&ts=1548573800",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},

 	"AOSP": {
 		"5.1.131": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/on7xelte/AOSP/Oxygen-Kernel-on7xelte-v5.1.131-AOSP.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fon7xelte%2FAOSP%2FOxygen-Kernel-on7xelte-v5.1.131-AOSP.zip%2Fdownload&ts=1548573821",
 			"date": "13-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.131</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 },

/*
 *  Samsung J7 Pro
 */
 "Samsung J7 Pro": {
 	"TW-OREO": {
 		"2.0.132": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7y17lte/TW/OREO/Oxygen-Kernel-j7y17lte-v2.0.132-TW-OREO.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7y17lte%2FTW%2FOREO%2FOxygen-Kernel-j7y17lte-v2.0.132-TW-OREO.zip%2Fdownload&ts=1548573887",
 			"date": "26-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.132</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 
 
 	"TW-OREO-Legacy-WiFi": {
 		"2.0.132": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7y17lte/TW/OREO-Legacy-WiFi/Oxygen-Kernel-j7y17lte-v2.0.132-TW-OREO-LEGACY-WIFI.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7y17lte%2FTW%2FOREO-Legacy-WiFi%2FOxygen-Kernel-j7y17lte-v2.0.132-TW-OREO-LEGACY-WIFI.zip%2Fdownload&ts=1548573861",
 			"date": "26-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.132</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},

 	"AOSP": {
 		"2.0.132": {
 			"url": "https://downloads.sourceforge.net/project/oxygen-kernel/j7y17lte/AOSP/Oxygen-Kernel-j7y17lte-v2.0.132-AOSP.zip?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Foxygen-kernel%2Ffiles%2Fj7y17lte%2FAOSP%2FOxygen-Kernel-j7y17lte-v2.0.132-AOSP.zip%2Fdownload&ts=1548573908",
 			"date": "26-01-2019",
 			"changelog": "<ol> <li>Updated to 3.18.132</li> <li>Fixed kernel not booting on some TW oreo ROMs</li> <li>Enabled back Input Booster for a better responsive user experience</li> <li>Updated to latest kernel source</li> <li>Removed some useless CPU governors (Only the best ones are kept)</li> <li>Removed unwanted IO Schedulers (Only the best ones are kept)</li> <li>Updated the kernel to better support AOSP ROMs</li> <li>Switched to Google's GCC 4.9 toolchain</li> <li>Removed a lot of useless debug and logging options</li> <li>Disabled TIMA, KNOX, DM-VERITY,etc</li></ol> <br>I can't list all of the changes because i've rebased the source code completely. But believe me, this is a major update."
 		},
 	},
 },

};
 
function onDeviceChanged() {
 versionsElement.options.length = 0;
  
 if (devicesElement.selectedIndex >= 0) {
  var device = devicesElement.options[devicesElement.selectedIndex].text;
 
  if (devices[device]) {
    for (var version in devices[device]) {
     var versionOption = document.createElement("option");
     versionOption.text = version;
     versionsElement.add(versionOption);
    }
  }
 }
 
 onVersionChanged();
}
 
function onVersionChanged() {
 kernelsElement.options.length = 0;
  
 if (devicesElement.selectedIndex >= 0 && versionsElement.selectedIndex >= 0) {
  var device = devicesElement.options[devicesElement.selectedIndex].text;
  var version = versionsElement.options[versionsElement.selectedIndex].text;
 
  if (devices[device] && devices[device][version]) {
   for (var kernel in devices[device][version]) {
        var kernelOption = document.createElement("option");
        kernelOption.text = kernel;
        kernelsElement.add(kernelOption);
	document.getElementById('textDiv').innerHTML = DivTxt[versionsElement.selectedIndex];
   }
  }
 }
 
 onKernelChanged();
}
 
function onKernelChanged() { 
 if (devicesElement.selectedIndex >= 0 && versionsElement.selectedIndex >= 0 && kernelsElement.selectedIndex >= 0) {
   var device = devicesElement.options[devicesElement.selectedIndex].text;
   var version = versionsElement.options[versionsElement.selectedIndex].text;
   var kernel = kernelsElement.options[kernelsElement.selectedIndex].text;
 
   if (devices[device] && devices[device][version] && devices[device][version][kernel]) {
    var download = devices[device][version][kernel];
   
    downloadElement.style.display = "block";
    downloadTitleElement.innerText = "CHANGELOG";
    downloadDateElement.innerText = download.date;
    downloadChangelogElement.innerHTML = download.changelog;
    onCollapseSizeChanged();
    return;
   }
 }
 
 downloadElement.style.display = "none";
}

function visitPage(){
 if (devicesElement.selectedIndex >= 0 && versionsElement.selectedIndex >= 0 && kernelsElement.selectedIndex >= 0) {
   var device = devicesElement.options[devicesElement.selectedIndex].text;
   var version = versionsElement.options[versionsElement.selectedIndex].text;
   var kernel = kernelsElement.options[kernelsElement.selectedIndex].text;
 
   if (devices[device] && devices[device][version] && devices[device][version][kernel]) {
    var download = devices[device][version][kernel];
    window.location = download.url;
    return;
   }
 }
}

for (var device in devices) {
  var deviceOption = document.createElement("option");
  deviceOption.text = device;
  devicesElement.add(deviceOption);
}

devicesElement.addEventListener("change", onDeviceChanged);
versionsElement.addEventListener("change", onVersionChanged);
kernelsElement.addEventListener("change", onKernelChanged);
 
onDeviceChanged();
