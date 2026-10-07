# Copyright 2026 Ángel Rivas <angel.rivas@sygel.es>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

from openupgradelib import openupgrade


def pre_init_hook(env):
    openupgrade.update_module_names(
        env.cr,
        [
            (
                "web_widget_remaining_days_reformat_state",
                "sy_web_widget_remaining_days_reformat_state",
            )
        ],
        merge_modules=True,
    )
