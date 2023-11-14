#!/bin/bash

# Run nmtui in a floating terminal window with bspwm
bspc rule -a "*" floating=on
alacritty --command nmtui
bspc rule -a "*" floating=off
