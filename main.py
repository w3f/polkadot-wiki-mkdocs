"""
Polkadot Wiki Macro functionality
"""

import substrateinterface



def define_env(env):

    substrate = substrateinterface.SubstrateInterface(url="wss://westend-rpc.polkadot.io")

    # 5Cm8yiG45rqrpyV2zPLrbtr8efksrRuCXcqcB4xj8AejfcTB
    @env.macro
    def add():
        result = substrate.query('System', 'Account', ['5Cm8yiG45rqrpyV2zPLrbtr8efksrRuCXcqcB4xj8AejfcTB'])
        return result.value['data']['free']