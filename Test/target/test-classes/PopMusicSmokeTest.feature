Feature: To test basic navigation of the popMusic site
  Scenario: To ensure all url's redirect to the correct place
   Given I go to the website "https://popmusicdev.abrsm.org/"
    When I enter my username and password
    Then I confirm I my login has been successful
    Then I click skip latency when the modal appears
    When I click on Song catalogue from the homepage
    Then The song catalogue is displayed
    When I click on the first song on the list
    Then I check to see if I am in a song screen by confirming the recording studio is there
    When I click the recording studio button
    Then I am taken to the recording studio and have confirmed this by ensuring Become the guitarist is visable
    When I click on back to lessons
    Then I am taken back to the lesson screen
    When I click on the Admin tab
    Then I am taken to the main admin screen
    When I click on the genres tab
    Then I am taken to the genre screen on the admin panel
    When I click on the chords tab
    Then I am taken to the chord screen
    When I click on the lessons tab
    Then I am taken to the lessons screen
    When I click on the taxonomies tab
    Then I am taken to the taxonomies screen
    When I click on the Calibration tab
    Then I am taken to the calibration screen
    When I click on the media upload tab
    Then I am taken to the upload screen
    When I click on the users tab
    Then I am taken to the users screen
    When I click on the Skill matrix increments tab
    Then I am taken to the skill matric increments screen
    When I click on song skill matrix report
    Then I am taken to the skill matrix report screen















