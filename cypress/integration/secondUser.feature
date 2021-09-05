Feature: Socket.io demo as second user

  I want to chat with first user

  Scenario: Success set name and start chatting
    Given I open "https://socket.io/demos/chat" page
    And I set my name to "user_test_two"
    And I sent message "hey this is me user_test_two!"
    Then I should see my message
