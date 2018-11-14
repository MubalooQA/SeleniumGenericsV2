package Definitions;

import Helpers.DriverHelpersChrome;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.sl.In;
import net.bytebuddy.implementation.bytecode.Throw;
import org.junit.Assert;

import java.sql.Driver;

public class popMusicSmokeTest {

    @When("^I enter my username and password$")
    public void iEnterMyUsernameAndPassword() throws InterruptedException {
        Thread.sleep(1000);
        DriverHelpersChrome.enterText("//*[@id=\"logonIdentifier\"]","Test3");
        DriverHelpersChrome.enterText("//*[@id=\"password\"]","coz@12345");
        DriverHelpersChrome.pressEnter("//*[@id=\"password\"]");
    }

    @Then("^I confirm I my login has been successful$")
    public void   iConfirmIMyLoginHasBeenSuccessful()throws InterruptedException {
        Thread.sleep(1000);
        boolean isCorrect = DriverHelpersChrome.checkForExactUrl("https://popmusicdev.abrsm.org/");
        Assert.assertTrue(isCorrect);

        }

    @When("^I click on Song catalogue from the homepage$")
    public void iClickOnSongCatalogueFromTheHomepage()throws InterruptedException {
        Thread.sleep(1000);
        DriverHelpersChrome.clickOnElementByPartialText("SONG CATALOGUE");
    }

    @Then("^The song catalogue is displayed$")
    public void theSongCatalogueIsDisplayed() {
        boolean isCorrect = DriverHelpersChrome.checkForExactUrl("https://popmusicdev.abrsm.org/VideoLesson/Songs");
        Assert.assertTrue(isCorrect);
    }

    @When("^I click on the first song on the list$")
    public void iClickOnTheFirstSongOnTheList()throws InterruptedException {
        DriverHelpersChrome.clickOnElementCss("#root > div > div.song-catalogue-wrapper > div > div > div:nth-child(1)");
    Thread.sleep(1000);
    }

    @Then("^I check to see if I am in a song screen by confirming the recording studio is there$")
    public void iCheckToSeeIfIAmInALessonScreenByConfirmingTheRecordingStudioIsThere() {
       DriverHelpersChrome.checkForCssID("#root > div > div.footer-wrapper > div.footer-container > div > div > button");
    }

    @When("^I click the recording studio button$")
    public void iClickTheRecordingStudioButton() {
        DriverHelpersChrome.clickOnElementWithDelayCss("#root > div > div.footer-wrapper > div.footer-container > div > div > button");
    }

    @Then("^I am taken to the recording studio and have confirmed this by ensuring Become the guitarist is visable$")
    public void iAmTakenToTheRecordingStudioAndHaveConfirmedThisByEnsuringBecomeTheGuitaristIsVisable() {
        DriverHelpersChrome.checkForCssID("#root > div > div.button-group-wrapper > div.button-group > button.second-button");
    }


    @When("^I click on back to lessons$")
    public void iClickOnBackToLessons(){
        DriverHelpersChrome.clickOnElementCss("#root > div > div.header-wrapper > div.header-container.container > div > div:nth-child(1) > a");
    }

    @Then("^I am taken back to the lesson screen$")
    public void iAmTakenBackToTheLessonScreen() {
        DriverHelpersChrome.checkForCssID("#root > div > div.footer-wrapper > div.footer-container > div > div > button");
    }

    @When("^I click on the Admin tab$")
    public void iClickOnTheAdminTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(4)");
    }

    @Then("^I am taken to the main admin screen$")
    public void iAmTakenToTheAdminScreen(){
        DriverHelpersChrome.checkForCssID("#submitForm > div > p > input.btn.btn-primary");

    }

    @When("^I click on the genres tab$")
    public void iClickOnTheGenresTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(2)");
    }

    @Then("^I am taken to the genre screen on the admin panel$")
    public void iAmTakenToTheGenreScreenOnTheAdminPanel() {
        DriverHelpersChrome.checkForCssID("body > div > main > table > tbody > tr:nth-child(2) > td:nth-child(1)");
    }

    @When("^I click on the chords tab$")
    public void iClickOnTheChordsTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(3)");
    }

    @Then("^I am taken to the chord screen$")
    public void iAmTakenToTheChordScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > h2");
    }

    @When("^I click on the lessons tab$")
    public void iClickOnTheLessonsTab(){
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(4)");
    }

    @Then("^I am taken to the lessons screen$")
    public void iAmTakenToTheLessonsScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > h2");
    }

    @When("^I click on the taxonomies tab$")
    public void iClickOnTheTaxonomiesTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(5)");
    }

    @Then("^I am taken to the taxonomies screen$")
    public void iAmTakenToTheTaxonomiesScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > h2");
    }

    @When("^I click on the Calibration tab$")
    public void iClickOnTheCalibrationTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(6)");
    }

    @Then("^I am taken to the calibration screen$")
    public void iAmTakenToTheCalibrationScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > div > div > h4");
    }

    @When("^I click on the media upload tab$")
    public void iClickOnTheMediaUploadTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(7)");
    }

    @Then("^I am taken to the upload screen$")
    public void iAmTakenToTheUploadScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > h2");
    }

    @When("^I click on the users tab$")
    public void iClickOnTheUsersTab() {
        DriverHelpersChrome.clickOnElementCss("body > div > main > h2");
    }

    @Then("^I am taken to the users screen$")
    public void iAmTakenToTheUsersScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > h2");
    }

    @When("^I click on the Skill matrix increments tab$")
    public void iClickOnTheSkillMatrixIncrementsTab() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(9)");
        }

    @Then("^I am taken to the skill matric increments screen$")
    public void iAmTakenToTheSkillMatricIncrementsScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > div > div > h2");
    }

    @When("^I click on song skill matrix report$")
    public void iClickOnSongSkillMatrixReport() {
        DriverHelpersChrome.clickOnElementCss("body > header > nav > div > div > a:nth-child(10)");
    }

    @Then("^I am taken to the skill matrix report screen$")
    public void iAmTakenToTheSkillMatrixReportScreen() {
        DriverHelpersChrome.checkForCssID("body > div > main > div > div > h2");
    }

    @Then("^I click skip latency when the modal appears$")
    public void iClickSkipLatencyWhenTheModalAppears() {
        DriverHelpersChrome.clickOnElementCss("body > div.ReactModalPortal > div > div > div > div > div.footer-modal > div.container > div > div > div.button-wrapper > button");
    }
}


