1. 获取当前默认启动器
	```shell
	adb shell cmd shortcut get-default-launcher
	```
2. 获取启动器packageName/activityName
	```shell
	adb shell dumpsys activity | findstr "mResume"
	```
3. 设置默认启动器
	```shell
	adb shell cmd package set-home-activity "com.bllocosn/com.bllocosn.MainActivity"
	```
	常见启动器包名
	
	|App Name|packageName/activityName|
	|---|---|
	|Ratio|com.bllocosn/com.bllocosn.MainActivity|
	|Omega|com.saggitt.omega/com.saggitt.omega.OmegaLauncher|
	|OpenLauncher|com.benny.openlauncher/com.benny.openlauncher.activity.HomeActivity|
	|Niagara|bitpit.launcher/.ui.HomeActivity|