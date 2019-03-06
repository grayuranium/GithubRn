/**
 * 全局跳转工具类
 */
export default class NavigationUtil {
    /**
     * 返回主页
     * @param navigation
     * @constructor
     */
    static BackToHomePage(navigation){
        navigation.navigate('AppHome')
    }

    /**
     * 回退
     * @param navigation
     * @constructor
     */
    static BackUp(navigation){
        navigation.goBack();
    }
}