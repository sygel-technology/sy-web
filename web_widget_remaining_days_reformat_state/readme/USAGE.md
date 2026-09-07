To remove format in fields that use the remaining_days widget, it is necessary to do the
following in another module:

1.  Include this module in the other module's dependencies list in manifest.
2.  Include in the fields that you want the remaining_days_reformat_state wisget.
3.  Include options="{'reformat': True}" in the fields that use the
    remaining_days_reformat_state widget so the text is displayed without an specific
    format.
4.  If the reformating only has to be performed if the instance is in certain states,
    the options declaration should be "options="{'reformat': True, 'reformat_states':
    \['state_1', 'state_2'\]}". It is possible to include as many states as needed in
    the reformat_states list.
