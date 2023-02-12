def on_received_string(receivedString):
    if receivedString == "Open":
        basic.show_icon(IconNames.HAPPY)
    elif receivedString == "Close":
        basic.show_icon(IconNames.ASLEEP)
    elif receivedString == "LEDL":
        basic.show_leds("""
            . . # . .
                        . # # . .
                        # # # . .
                        . # # . .
                        . . # . .
        """)
    elif receivedString == "LEDR":
        basic.show_leds("""
            . . # . .
                        . . # # .
                        . . # # #
                        . . # # .
                        . . # . .
        """)
    elif receivedString == "F":
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
    elif receivedString == "B":
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
    elif receivedString == "L":
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
    elif receivedString == "R":
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
radio.on_received_string(on_received_string)

basic.show_icon(IconNames.HEART)
radio.set_group(1)