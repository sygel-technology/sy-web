# Copyright 2023 Manuel Regidor <manuel.regidor@sygel.es>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "Web Company Logo",
    "summary": "Web Company Logo",
    "version": "16.0.1.0.0",
    "category": "web",
    "website": "https://www.kareemabuzaid.com, https://www.sygel.es",
    "author": "Kareem Abuzaid, kareem.abuzaid123@gmail.com, Sygel",
    "license": "AGPL-3",
    "application": False,
    "installable": True,
    'depends': [
        'base',
        'web',
    ],
    "assets": {
        "web.assets_backend": [
            "web_company_logo/static/src/css/menu.css",
            "web_company_logo/static/src/xml/menu.xml",
            "web_company_logo/static/src/js/menu.js",
        ],
    },
}
