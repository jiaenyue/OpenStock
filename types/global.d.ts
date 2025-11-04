/**
 * @file 该文件为整个应用程序定义了全局 TypeScript 类型。
 * 通过在 `declare global` 块中声明，这些类型可以在任何地方使用，无需显式导入。
 * 这种方法对于在多个组件和模块之间共享的通用类型定义非常有用。
 */
declare global {
    /**
     * 定义了登录表单的数据结构。
     */
    type SignInFormData = {
        email: string;
        password: string;
    };

    /**
     * 定义了注册表单的数据结构。
     */
    type SignUpFormData = {
        fullName: string;
        email: string;
        password: string;
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustry: string;
    };

    /**
     * 定义了国家选择组件的 props。
     */
    type CountrySelectProps = {
        name: string;
        label: string;
        control: Control;
        error?: FieldError;
        required?: boolean;
    };

    /**
     * 定义了通用表单输入组件的 props。
     */
    type FormInputProps = {
        name: string;
        label: string;
        placeholder: string;
        type?: string;
        register: UseFormRegister;
        error?: FieldError;
        validation?: RegisterOptions;
        disabled?: boolean;
        value?: string;
    };

    /**
     * 定义了下拉选择菜单中选项的结构。
     */
    type Option = {
        value: string;
        label: string;
    };

    /**
     * 定义了下拉选择字段组件的 props。
     */
    type SelectFieldProps = {
        name: string;
        label: string;
        placeholder: string;
        options: readonly Option[];
        control: Control;
        error?: FieldError;
        required?: boolean;
    };

    /**
     * 定义了页脚链接组件的 props。
     */
    type FooterLinkProps = {
        text: string;
        linkText: string;
        href: string;
    };

    /**
     * 定义了搜索命令组件的 props。
     */
    type SearchCommandProps = {
        renderAs?: 'button' | 'text';
        label?: string;
        initialStocks: StockWithWatchlistStatus[];
    };

    /**
     * 定义了发送欢迎邮件函数所需的数据结构。
     */
    type WelcomeEmailData = {
        email: string;
        name: string;
        intro: string;
    };

    /**
     * 定义了用户对象的基本结构。
     */
    type User = {
        id: string;
        name: string;
        email: string;
    };

    /**
     * 定义了股票对象的基本结构。
     */
    type Stock = {
        symbol: string;
        name: string;
        exchange: string;
        type: string;
    };

    /**
     * 扩展了 Stock 类型，增加了 `isInWatchlist` 字段来表示股票是否在用户的关注列表中。
     */
    type StockWithWatchlistStatus = Stock & {
        isInWatchlist: boolean;
    };

    /**
     * 定义了 Finnhub API 搜索结果中单个项目的结构。
     */
    type FinnhubSearchResult = {
        symbol: string;
        description: string;
        displaySymbol?: string;
        type: string;
    };

    /**
     * 定义了 Finnhub API 搜索响应的整体结构。
     */
    type FinnhubSearchResponse = {
        count: number;
        result: FinnhubSearchResult[];
    };

    /**
     * 定义了股票详情页面的 props，其中包含一个解析为股票代码的 Promise。
     */
    type StockDetailsPageProps = {
        params: Promise<{
            symbol: string;
        }>;
    };

    /**
     * 定义了关注列表按钮组件的 props。
     */
    type WatchlistButtonProps = {
        symbol: string;
        company: string;
        isInWatchlist: boolean;
        showTrashIcon?: boolean;
        type?: 'button' | 'icon';
        onWatchlistChange?: (symbol: string, isAdded: boolean) => void;
    };

    /**
     * 定义了从 API 获取的报价数据的结构。
     */
    type QuoteData = {
        c?: number; // 当前价格
        dp?: number; // 百分比变化
    };

    /**
     * 定义了从 API 获取的公司简介数据的结构。
     */
    type ProfileData = {
        name?: string;
        marketCapitalization?: number;
    };

    /**
     * 定义了从 API 获取的公司财务数据的结构。
     */
    type FinancialsData = {
        metric?: { [key: string]: number };
    };

    /**
     * 定义了用户在 UI 中选择的股票的结构。
     */
    type SelectedStock = {
        symbol: string;
        company: string;
        currentPrice?: number;
    };

    /**
     * 定义了关注列表表格组件的 props。
     */
    type WatchlistTableProps = {
        watchlist: StockWithData[];
    };

    /**
     * 扩展了关注列表项的类型，增加了从 API 获取的附加数据（如当前价格、市值等）。
     */
    type StockWithData = {
        userId: string;
        symbol: string;
        company: string;
        addedAt: Date;
        currentPrice?: number;
        changePercent?: number;
        priceFormatted?: string;
        changeFormatted?: string;
        marketCap?: string;
        peRatio?: string;
    };

    /**
     * 定义了警报列表组件的 props。
     */
    type AlertsListProps = {
        alertData: Alert[] | undefined;
    };

    /**
     * 定义了格式化后的市场新闻文章的结构。
     */
    type MarketNewsArticle = {
        id: number;
        headline: string;
        summary: string;
        source: string;
        url: string;
        datetime: number;
        category: string;
        related: string;
        image?: string;
    };

    /**
     * 定义了关注列表新闻组件的 props。
     */
    type WatchlistNewsProps = {
        news?: MarketNewsArticle[];
    };

    /**
     * 再次定义了搜索命令组件的 props，存在重复定义，应考虑合并。
     */
    type SearchCommandProps = {
        open?: boolean;
        setOpen?: (open: boolean) => void;
        renderAs?: 'button' | 'text';
        buttonLabel?: string;
        buttonVariant?: 'primary' | 'secondary';
        className?: string;
    };

    /**
     * 定义了创建或编辑警报时所需的数据结构。
     */
    type AlertData = {
        symbol: string;
        company: string;
        alertName: string;
        alertType: 'upper' | 'lower';
        threshold: string;
    };

    /**
     * 定义了警报模态框组件的 props。
     */
    type AlertModalProps = {
        alertId?: string;
        alertData?: AlertData;
        action?: string;
        open: boolean;
        setOpen: (open: boolean) => void;
    };

    /**
     * 定义了从 API 获取的原始新闻文章的结构，字段均为可选。
     */
    type RawNewsArticle = {
        id: number;
        headline?: string;
        summary?: string;
        source?: string;
        url?: string;
        datetime?: number;
        image?: string;
        category?: string;
        related?: string;
    };

    /**
     * 定义了警报对象的完整结构。
     */
    type Alert = {
        id: string;
        symbol: string;
        company: string;
        alertName: string;
        currentPrice: number;
        alertType: 'upper' | 'lower';
        threshold: number;
        changePercent?: number;
    };
}

// 导出一个空对象以确保该文件被视为一个模块。
export {};
