# Copyright 2024 Manuel Regidor <manuel.regidor@sygel.es>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "Remaining Days Widget - Reformat State",
    "version": "17.0.1.0.0",
    "author": "Sygel, Odoo Community Association (OCA)",
    "license": "AGPL-3",
    "category": "Web",
    "summary": "Reformat text shown with remaining_days widget",
    "website": "https://github.com/sygel-technology/sy-web",
    "depends": [
        "web",
    ],
    "data": [],
    "assets": {
        "web.assets_backend": [
            "sy_web_widget_remaining_days_reformat_state/static/src/remaining_days_reformat_state/remaining_days_widget_reformat_state.esm.js",
            "sy_web_widget_remaining_days_reformat_state/static/src/remaining_days_reformat_state/remaining_days_widget_reformat_state.xml",
        ],
    },
    "pre_init_hook": "pre_init_hook",
    "external_dependencies": {"python": ["openupgradelib"]},
}
