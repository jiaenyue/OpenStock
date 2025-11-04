declare global {
    /**
     * 登录表单的数据类型。
     * @property {string} email - 用户的电子邮件。
     * @property {string} password - 用户的密码。
     */
    type SignInFormData = {
        email: string;
        password: string;
    };

    /**
     * 注册表单的数据类型。
     * @property {string} fullName - 用户的全名。
     * @property {string} email - 用户的电子邮件。
     * @property {string} password - 用户的密码。
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustry: string;
    };

    /**
     * CountrySelectField 组件的属性。
     * @property {string} name - 表单字段的名称。
     * @property {string} label - 表单字段的标签。
     * @property {Control} control - 来自 react-hook-form 的 control 对象。
     * @property {FieldError} [error] - 来自 react-hook-form 的 error 对象。
     * @property {boolean} [required] - 指示字段是否为必填项。
     */
    type CountrySelectProps = {
        name: string;
        label: string;
        control: Control;
        error?: FieldError;
        required?: boolean;
    };

    /**
     * InputField 组件的属性。
     * @property {string} name - 字段的名称。
     * @property {string} label - 字段的标签。
     * @property {string} placeholder - 字段的占位符文本。
     * @property {string} [type] - 输入类型（例如 "text"、"password"）。
     * @property {UseFormRegister} register - 来自 react-hook-form 的 register 函数。
     * @property {FieldError} [error] - 来自 react-hook-form 的 error 对象。
     * @property {RegisterOptions} [validation] - react-hook-form 的验证规则。
     * @property {boolean} [disabled] - 指示字段是否被禁用。
     * @property {string} [value] - 字段的初始值。
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
     * 选择字段的选项。
     * @property {string} value - 选项的值。
     * @property {string} label - 选项的标签。
     */
    type Option = {
        value: string;
        label: string;
    };

    /**
     * SelectField 组件的属性。
     * @property {string} name - 字段的名称。
     * @property {string} label - 字段的标签。
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
     * FooterLink 组件的属性。
     * @property {string} text - 链接前的文本。
     * @property {string} linkText - 链接的文本。
     * @property {string} href - 链接的 URL。
     */
    type FooterLinkProps = {
        text: string;
        linkText: string;
        href: string;
    };

    /**
     * SearchCommand 组件的属性。
     * @property {'button' | 'text'} [renderAs] - 触发器的渲染方式。
     * @property {string} [label] - 触发器的标签。
     * @property {StockWithWatchlistStatus[]} initialStocks - 初始股票列表。
     */
    type SearchCommandProps = {
        renderAs?: 'button' | 'text';
        label?: string;
        initialStocks: StockWithWatchlistStatus[];
    };

    /**
     * 欢迎邮件的数据类型。
     * @property {string} email - 收件人的电子邮件。
     * @property {string} name - 收件人的姓名。
     * @property {string} intro - 邮件的介绍内容。
     */
    type WelcomeEmailData = {
        email: string;
        name: string;
        intro: string;
    };

    /**
     * 用户的数据类型。
     * @property {string} id - 用户的 ID。
     * @property {string} name - 用户的姓名。
     * @property {string} email - 用户的电子邮件。
     */
    type User = {
        id: string;
        name: string;
        email: string;
    };

    /**
     * 股票的数据类型。
     * @property {string} symbol - 股票代码。
     * @property {string} name - 公司名称。
     * @property {string} exchange - 交易所。
     * @property {string} type - 股票类型。
     */
    type Stock = {
        symbol: string;
        name: string;
        exchange: string;
        type: string;
    };

    /**
     * 带有观察列表状态的股票数据类型。
     * @property {boolean} isInWatchlist - 指示股票是否在观察列表中。
     */
    type StockWithWatchlistStatus = Stock & {
        isInWatchlist: boolean;
    };

    /**
     * Finnhub 搜索结果的数据类型。
     * @property {string} symbol - 股票代码。
     * @property {string} description - 公司描述。
     * @property {string} [displaySymbol] - 显示的股票代码。
     * @property {string} type - 股票类型。
     */
    type FinnhubSearchResult = {
        symbol: string;
        description: string;
        displaySymbol?: string;
        type: string;
    };

    /**
     * Finnhub 搜索响应的数据类型。
     * @property {number} count - 结果数量。
     * @property {FinnhubSearchResult[]} result - 搜索结果。
     */
    type FinnhubSearchResponse = {
        count: number;
        result: FinnhubSearchResult[];
    };

    /**
     * StockDetails 页面的属性。
     * @property {Promise<{symbol: string}>} params - 页面参数。
     */
    type StockDetailsPageProps = {
        params: Promise<{
            symbol: string;
        }>;
    };

    /**
     * WatchlistButton 组件的属性。
     * @property {string} symbol - 股票代码。
     * @property {string} company - 公司名称。
     * @property {boolean} isInWatchlist - 指示股票是否已在观察列表中。
     * @property {boolean} [showTrashIcon] - 指示是否显示垃圾桶图标。
     * @property {'button' | 'icon'} [type] - 按钮的类型。
     * @property {(symbol: string, isAdded: boolean) => void} [onWatchlistChange] - 当观察列表状态改变时调用的函数。
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
     * 报价数据的数据类型。
     * @property {number} [c] - 当前价格。
     * @property {number} [dp] - 百分比变化。
     */
    type QuoteData = {
        c?: number;
        dp?: number;
    };

    /**
     * 公司简介数据的数据类型。
     * @property {string} [name] - 公司名称。
     * @property {number} [marketCapitalization] - 市值。
     */
    type ProfileData = {
        name?: string;
        marketCapitalization?: number;
    };

    /**
     * 公司财务数据的数据类型。
     * @property {object} [metric] - 指标。
     */
    type FinancialsData = {
        metric?: { [key: string]: number };
    };

    /**
     * 选定股票的数据类型。
     * @property {string} symbol - 股票代码。
     * @property {string} company - 公司名称。
     * @property {number} [currentPrice] - 当前价格。
     */
    type SelectedStock = {
        symbol: string;
        company: string;
        currentPrice?: number;
    };

    /**
     * WatchlistTable 组件的属性。
     * @property {StockWithData[]} watchlist - 观察列表。
     */
    type WatchlistTableProps = {
        watchlist: StockWithData[];
    };

    /**
     * 带有数据的股票数据类型。
     * @property {string} userId - 用户 ID。
     * @property {string} symbol - 股票代码。
     * @property {string} company - 公司名称。
     * @property {Date} addedAt - 添加日期。
     * @property {number} [currentPrice] - 当前价格。
     * @property {number} [changePercent] - 百分比变化。
     * @property {string} [priceFormatted] - 格式化的价格。
     * @property {string} [changeFormatted] - 格式化的变化。
     * @property {string} [marketCap] - 市值。
     * @property {string} [peRatio] - 市盈率。
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
     * AlertsList 组件的属性。
     * @property {Alert[]} [alertData] - 警报数据。
     */
    type AlertsListProps = {
        alertData: Alert[] | undefined;
    };

    /**
     * 市场新闻文章的数据类型。
     * @property {number} id - 文章 ID。
     * @property {string} headline - 标题。
     * @property {string} summary - 摘要。
     * @property {string} source - 来源。
     * @property {string} url - URL。
     * @property {number} datetime - 日期时间。
     * @property {string} category - 类别。
     * @property {string} related - 相关信息。
     * @property {string} [image] - 图片 URL。
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
     * WatchlistNews 组件的属性。
     * @property {MarketNewsArticle[]} [news] - 新闻文章。
     */
    type WatchlistNewsProps = {
        news?: MarketNewsArticle[];
    };

    /**
     * SearchCommand 组件的属性。
     * @property {boolean} [open] - 对话框是否打开。
     * @property {(open: boolean) => void} [setOpen] - 设置对话框打开状态的函数。
     * @property {'button' | 'text'} [renderAs] - 触发器的渲染方式。
     * @property {string} [buttonLabel] - 按钮标签。
     * @property {'primary' | 'secondary'} [buttonVariant] - 按钮变体。
     * @property {string} [className] - CSS 类名。
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
     * 警报数据的数据类型。
     * @property {string} symbol - 股票代码。
     * @property {string} company - 公司名称。
     * @property {string} alertName - 警报名称。
     * @property {'upper' | 'lower'} alertType - 警报类型。
     * @property {string} threshold - 阈值。
     */
    type AlertData = {
        symbol: string;
        company: string;
        alertName: string;
        alertType: 'upper' | 'lower';
        threshold: string;
    };

    /**
     * AlertModal 组件的属性。
     * @property {string} [alertId] - 警报 ID。
     * @property {AlertData} [alertData] - 警报数据。
     * @property {string} [action] - 操作。
     * @property {boolean} open - 模态框是否打开。
     * @property {(open: boolean) => void} setOpen - 设置模态框打开状态的函数。
     */
    type AlertModalProps = {
        alertId?: string;
        alertData?: AlertData;
        action?: string;
        open: boolean;
        setOpen: (open: boolean) => void;
    };

    /**
     * 原始新闻文章的数据类型。
     * @property {number} id - 文章 ID。
     * @property {string} [headline] - 标题。
     * @property {string} [summary] - 摘要。
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
     * 警报的数据类型。
     * @property {string} id - 警报 ID。
     * @property {string} symbol - 股票代码。
     * @property {string} company - 公司名称。
     * @property {string} alertName - 警报名称。
     * @property {number} currentPrice - 当前价格。
     * @property {'upper' | 'lower'} alertType - 警报类型。
     * @property {number} threshold - 阈值。
     * @property {number} [changePercent] - 百分比变化。
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

export {};