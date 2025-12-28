/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["employee/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
