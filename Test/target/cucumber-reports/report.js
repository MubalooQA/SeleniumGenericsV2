$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/PopMusicSmokeTest.feature");
formatter.feature({
  "name": "To test basic navigation of the popMusic site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To ensure all url\u0027s redirect to the correct place",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the website \"https://popmusicdev.abrsm.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DriverHelpersChrome.iGoToTheWebsite(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my username and password",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iEnterMyUsernameAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm I my login has been successful",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iConfirmIMyLoginHasBeenSuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click skip latency when the modal appears",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickSkipLatencyWhenTheModalAppears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Song catalogue from the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnSongCatalogueFromTheHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The song catalogue is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.theSongCatalogueIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the first song on the list",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheFirstSongOnTheList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check to see if I am in a song screen by confirming the recording studio is there",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iCheckToSeeIfIAmInALessonScreenByConfirmingTheRecordingStudioIsThere()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the recording studio button",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickTheRecordingStudioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the recording studio and have confirmed this by ensuring Become the guitarist is visable",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheRecordingStudioAndHaveConfirmedThisByEnsuringBecomeTheGuitaristIsVisable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on back to lessons",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnBackToLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken back to the lesson screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenBackToTheLessonScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Admin tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheAdminTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the main admin screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheAdminScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the genres tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheGenresTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the genre screen on the admin panel",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheGenreScreenOnTheAdminPanel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the chords tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheChordsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the chord screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheChordScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the lessons tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheLessonsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the lessons screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheLessonsScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the taxonomies tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheTaxonomiesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the taxonomies screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheTaxonomiesScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Calibration tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheCalibrationTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the calibration screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheCalibrationScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the media upload tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheMediaUploadTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the upload screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheUploadScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the users tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheUsersTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the users screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheUsersScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Skill matrix increments tab",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnTheSkillMatrixIncrementsTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the skill matric increments screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheSkillMatricIncrementsScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on song skill matrix report",
  "keyword": "When "
});
formatter.match({
  "location": "popMusicSmokeTest.iClickOnSongSkillMatrixReport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am taken to the skill matrix report screen",
  "keyword": "Then "
});
formatter.match({
  "location": "popMusicSmokeTest.iAmTakenToTheSkillMatrixReportScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});