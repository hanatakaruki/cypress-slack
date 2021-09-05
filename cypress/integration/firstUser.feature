Feature: Socket.io demo as first user

  I want to chat with second user

  Scenario: Success set name and start chatting
    Given I open "https://socket.io/demos/chat" page
    And I set my name to "user_test_one"
    And I sent message "hey this is me user_test_one!"
    Then I should see my message
