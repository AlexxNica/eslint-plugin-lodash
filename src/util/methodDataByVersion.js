'use strict'
module.exports = {
    3: {
        aliases: {
            forEach: [
                'each'
            ],
            assign: [
                'extend'
            ],
            first: [
                'head'
            ],
            zipObject: [
                'object'
            ],
            rest: [
                'tail'
            ],
            uniq: [
                'unique'
            ],
            reduce: [
                'foldl',
                'inject'
            ],
            reduceRight: [
                'foldr'
            ],
            some: [
                'any'
            ],
            map: [
                'collect'
            ],
            includes: [
                'contains',
                'include'
            ],
            flowRight: [
                'backflow',
                'compose'
            ],
            isEqual: [
                'eq'
            ],
            every: [
                'all'
            ],
            find: [
                'detect'
            ],
            forEachRight: [
                'eachRight'
            ],
            filter: [
                'select'
            ],
            functions: [
                'methods'
            ],
            callback: [
                'iteratee'
            ]
        },
        wrapper: [
            'concat',
            'join',
            'pop',
            'push',
            'reverse',
            'shift',
            'slice',
            'sort',
            'splice',
            'unshift',
            'replace',
            'split'
        ],
        wrapperAliases: {
            value: [
                'run',
                'toJSON',
                'valueOf'
            ]
        },
        shorthand: [
            'dropRightWhile',
            'dropWhile',
            'findIndex',
            'findLastIndex',
            'remove',
            'sortedIndex',
            'sortedLastIndex',
            'map',
            'takeRightWhile',
            'takeWhile',
            'uniq',
            'countBy',
            'every',
            'filter',
            'find',
            'result',
            'groupBy',
            'indexBy',
            'partition',
            'reject',
            'some',
            'sortBy',
            'sortByOrder',
            'max',
            'min',
            'sum',
            'findKey',
            'findLastKey',
            'mapValues'
        ],
        chainable: [
            'after',
            'ary',
            'assign',
            'at',
            'before',
            'bind',
            'bindAll',
            'bindKey',
            'callback',
            'chain',
            'chunk',
            'commit',
            'compact',
            'concat',
            'constant',
            'countBy',
            'create',
            'curry',
            'debounce',
            'defaults',
            'defaultsDeep',
            'defer',
            'delay',
            'difference',
            'drop',
            'dropRight',
            'dropRightWhile',
            'dropWhile',
            'fill',
            'filter',
            'flatten',
            'flattenDeep',
            'flow',
            'flowRight',
            'forEach',
            'forEachRight',
            'forIn',
            'forInRight',
            'forOwn',
            'forOwnRight',
            'functions',
            'groupBy',
            'indexBy',
            'initial',
            'intersection',
            'invert',
            'invoke',
            'keys',
            'keysIn',
            'map',
            'mapKeys',
            'mapValues',
            'matches',
            'matchesProperty',
            'memoize',
            'merge',
            'method',
            'methodOf',
            'mixin',
            'modArgs',
            'negate',
            'omit',
            'once',
            'pairs',
            'partial',
            'partialRight',
            'partition',
            'pick',
            'plant',
            'pluck',
            'property',
            'propertyOf',
            'pull',
            'pullAt',
            'push',
            'range',
            'rearg',
            'reject',
            'remove',
            'rest',
            'restParam',
            'reverse',
            'set',
            'shuffle',
            'slice',
            'sort',
            'sortBy',
            'sortByAll',
            'sortByOrder',
            'splice',
            'spread',
            'take',
            'takeRight',
            'takeRightWhile',
            'takeWhile',
            'tap',
            'throttle',
            'thru',
            'times',
            'toArray',
            'toPlainObject',
            'transform',
            'union',
            'uniq',
            'unshift',
            'unzip',
            'unzipWith',
            'values',
            'valuesIn',
            'where',
            'without',
            'wrap',
            'xor',
            'zip',
            'zipObject',
            'zipWith'
        ],
        iteratee: {
            any: ['dropRightWhile', 'dropWhile', 'findIndex', 'findLastIndex', 'remove', 'sortedIndex', 'sortedLastIndex', 'takeRightWhile',
                'takeWhile', 'uniq', 'unzipWith', 'zipWith', 'tap', 'thru', 'countBy', 'every', 'filter', 'find', 'findLast', 'forEach', 'forEachRight', 'groupBy', 'indexBy', 'map', 'partition', 'reduce',
                'reduceRight', 'reject', 'some', 'sortBy', 'max', 'min', 'sum', 'findKey', 'findLastKey', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'mapKeys', 'mapValues', 'transform', 'times'
            ],
            differentIndex: {
                sortedIndex: 2,
                sortedLastIndex: 2
            }
        },
        args: {
            chunk: 2,
            compact: 1,
            drop: 2,
            dropRight: 2,
            dropRightWhile: 3,
            dropWhile: 3,
            fill: 4,
            findIndex: 3,
            findLastIndex: 3,
            first: 1,
            flatten: 2,
            flattenDeep: 1,
            fromIndex: 3,
            initial: 1,
            last: 1,
            lastIndexOf: 3,
            remove: 3,
            rest: 1,
            slice: 3,
            sortedIndex: 4,
            sortedLastIndex: 4,
            take: 2,
            takeRight: 2,
            takeRightWhile: 3,
            takeWhile: 3,
            uniq: 4,
            unzip: 1,
            unzipWith: 3,
            zipObject: 2,
            tap: 3,
            thru: 3,
            countBy: 3,
            every: 3,
            filter: 3,
            find: 3,
            findLast: 3,
            findWhere: 2,
            forEach: 3,
            forEachRight: 3,
            groupBy: 3,
            includes: 3,
            indexBy: 3,
            map: 3,
            partition: 3,
            pluck: 2,
            reduce: 4,
            reduceRight: 4,
            reject: 3,
            sample: 2,
            shuffle: 1,
            size: 1,
            some: 3,
            sortBy: 3,
            where: 2,
            after: 2,
            ary: 2,
            before: 2,
            curry: 2,
            curryRight: 2,
            debounce: 3,
            memoize: 2,
            negate: 1,
            once: 1,
            restParam: 2,
            spread: 1,
            throttle: 3,
            wrap: 2,
            clone: 4,
            cloneDeep: 3,
            gt: 2,
            gte: 2,
            isArguments: 1,
            isArray: 1,
            isBoolean: 1,
            isDate: 1,
            isElement: 1,
            isEmpty: 1,
            isEqual: 4,
            isError: 1,
            isFinite: 1,
            isFunction: 1,
            isMatch: 4,
            isNaN: 1,
            isNative: 1,
            isNull: 1,
            isNumber: 1,
            isObject: 1,
            isPlainObject: 1,
            isRegExp: 1,
            isTypedArray: 1,
            isUndefined: 1,
            lt: 2,
            lte: 2,
            toArray: 1,
            toPlainObject: 1,
            add: 2,
            ceil: 2,
            floor: 2,
            max: 3,
            min: 3,
            round: 2,
            sum: 3,
            inRange: 3,
            random: 3,
            create: 2,
            findKey: 3,
            findLastKey: 3,
            forIn: 3,
            forInRight: 3,
            forOwn: 3,
            forOwnRight: 3,
            functions: 1,
            get: 3,
            has: 2,
            invert: 2,
            keys: 1,
            keysIn: 1,
            mapKeys: 3,
            mapValues: 3,
            pairs: 1,
            result: 3,
            set: 3,
            transform: 4,
            values: 1,
            valuesIn: 1,
            camelCase: 1,
            capitalize: 1,
            deburr: 1,
            endsWith: 3,
            escape: 1,
            escapeRegExp: 1,
            kebabCase: 1,
            pad: 3,
            padLeft: 3,
            padRight: 3,
            parseInt: 2,
            repeat: 2,
            snakeCase: 2,
            startCase: 2,
            startsWith: 3,
            template: 2,
            trim: 2,
            trimLeft: 2,
            trimRight: 2,
            trunc: 3,
            unescape: 1,
            words: 2,
            callback: 2,
            constant: 1,
            identity: 1,
            matches: 1,
            matchesProperty: 2,
            mixin: 3,
            noConflict: 0,
            noop: 0,
            property: 1,
            propertyOf: 1,
            range: 3,
            runInContext: 1,
            times: 3,
            uniqueId: 1
        }
    },
    4: {
        aliases: {
            assignIn: [
                'extend'
            ],
            assignInWith: [
                'extendWith'
            ],
            forEach: [
                'each'
            ],
            forEachRight: [
                'eachRight'
            ],
            head: [
                'first'
            ],
        },
        wrapper: [
            'concat',
            'join',
            'pop',
            'push',
            'replace',
            'shift',
            'sort',
            'splice',
            'split',
            'unshift'
        ],
        wrapperAliases: {
            value: [
                'toJSON',
                'valueOf'
            ]
        },
        shorthand: [
            'differenceBy',
            'dropRightWhile',
            'dropWhile',
            'every',
            'filter',
            'find',
            'findIndex',
            'findKey',
            'findLastIndex',
            'findLastKey',
            'groupBy',
            'intersectionBy',
            'map',
            'mapValues',
            'maxBy',
            'minBy',
            'partition',
            'reject',
            'remove',
            'some',
            'sortedIndexBy',
            'sortedLastIndexBy',
            'sumBy',
            'takeRightWhile',
            'takeWhile',
            'unionBy',
            'uniqBy',
            'xorBy'
        ],
        chainable: ['after','ary','assign','assignIn','assignInWith','assignWith','at','before','bind','bindAll','bindKey','castArray','chain','chunk','commit','compact','concat','conforms','constant','countBy','create','curry','debounce','defaults','defaultsDeep','defer','delay','difference','differenceBy','differenceWith','drop','dropRight','dropRightWhile','dropWhile','fill','filter','flatMap','flatten','flattenDeep','flattenDepth','flip','flow','flowRight','fromPairs','functions','functionsIn','groupBy','initial','intersection','intersectionBy','intersectionWith','invert','invertBy','invokeMap','iteratee','keyBy','keys','keysIn','map','mapKeys','mapValues','matches','matchesProperty','memoize','merge','mergeWith','method','methodOf','mixin','negate','nthArg','omit','omitBy','once','orderBy','over','overArgs','overEvery','overSome','partial','partialRight','partition','pick','pickBy','plant','property','propertyOf','pull','pullAll','pullAllBy','pullAllWith','pullAt','push','range','rangeRight','rearg','reject','remove','rest','reverse','sampleSize','set','setWith','shuffle','slice','sort','sortBy','splice','spread','tail','take','takeRight','takeRightWhile','takeWhile','tap','throttle','thru','toArray','toPairs','toPairsIn','toPath','toPlainObject','transform','unary','union','unionBy','unionWith','uniq','uniqBy','uniqWith','unset','unshift','unzip','unzipWith','update','updateWith','values','valuesIn','without','wrap','xor','xorBy','xorWith','zip','zipObject','zipObjectDeep','zipWith'],
        iteratee: {
            any: ['cloneDeepWith', 'cloneWith', 'countBy', 'dropRightWhile', 'dropWhile', 'every', 'filter', 'find', 'findIndex',
                'findKey', 'findLast', 'findLastIndex', 'findLastKey', 'flatMap', 'forEach', 'forEachRight', 'forIn', 'forInRight',
                'forOwn', 'forOwnRight', 'groupBy', 'indexBy', 'keyBy', 'map', 'mapKeys', 'mapValues', 'maxBy', 'minBy', 'omitBy',
                'partition', 'pickBy', 'pullAllBy', 'reduce', 'reduceRight', 'reject', 'remove', 'some', 'sortedUniqBy',
                'sumBy', 'takeRightWhile', 'takeWhile', 'tap', 'thru', 'times', 'transform', 'uniqBy', 'unzipWith', 'xorBy'],
            differentIndex: {
                pullAllBy: 2,
                sortedIndex: 2,
                sortedIndexBy: 2,
                sortedLastIndex: 2,
                sortedLastIndexBy: 2
            }
        },
        args: {
            add: 2,
            after: 2,
            ary: 2,
            before: 2,
            camelCase: 1,
            capitalize: 1,
            castArray: 1,
            ceil: 2,
            chain: 1,
            chunk: 2,
            clamp: 3,
            clone: 1,
            cloneDeep: 1,
            cloneDeepWith: 2,
            cloneWith: 2,
            compact: 1,
            cond: 1,
            conforms: 1,
            constant: 1,
            countBy: 2,
            create: 2,
            curry: 2,
            curryRight: 2,
            debounce: 3,
            deburr: 1,
            drop: 2,
            dropRight: 2,
            dropRightWhile: 3,
            dropWhile: 3,
            endsWith: 3,
            eq: 2,
            escape: 1,
            escapeRegExp: 1,
            every: 2,
            fill: 4,
            filter: 2,
            find: 2,
            findIndex: 2,
            findKey: 2,
            findLast: 2,
            findLastIndex: 2,
            findLastKey: 2,
            flatMap: 2,
            flatten: 1,
            flattenDeep: 1,
            flattenDepth: 2,
            flip: 1,
            floor: 2,
            forEach: 2,
            forEachRight: 2,
            forIn: 2,
            forInRight: 2,
            forOwn: 2,
            forOwnRight: 2,
            fromPairs: 1,
            functions: 1,
            functionsIn: 1,
            get: 3,
            groupBy: 2,
            gt: 2,
            gte: 2,
            has: 2,
            hasIn: 2,
            head: 1,
            identity: 1,
            inRange: 3,
            includes: 3,
            indexOf: 3,
            initial: 1,
            invert: 1,
            invertBy: 2,
            isArguments: 1,
            isArray: 1,
            isArrayBuffer: 1,
            isArrayLike: 1,
            isArrayLikeObject: 1,
            isBoolean: 1,
            isBuffer: 1,
            isDate: 1,
            isElement: 1,
            isEmpty: 1,
            isEqual: 2,
            isEqualWith: 3,
            isError: 1,
            isFinite: 1,
            isFunction: 1,
            isInteger: 1,
            isLength: 1,
            isMatch: 2,
            isMatchWith: 3,
            isNaN: 1,
            isNative: 1,
            isNil: 1,
            isNull: 1,
            isNumber: 1,
            isObject: 1,
            isObjectLike: 1,
            isPlainObject: 1,
            isRegExp: 1,
            isSafeInteger: 1,
            isSet: 1,
            isString: 1,
            isSymbol: 1,
            isTypedArray: 1,
            isUndefined: 1,
            isWeakMap: 1,
            isWeakSet: 1,
            join: 2,
            kebabCase: 1,
            keyBy: 2,
            keys: 1,
            keysIn: 1,
            last: 1,
            lastIndexOf: 3,
            lowerCase: 1,
            lowerFirst: 1,
            lt: 2,
            lte: 2,
            map: 2,
            mapKeys: 2,
            mapValues: 2,
            matches: 1,
            matchesProperty: 2,
            max: 1,
            maxBy: 2,
            mean: 1,
            memoize: 2,
            min: 1,
            minBy: 2,
            mixin: 3,
            negate: 1,
            noConflict: 0,
            noop: 0,
            now: 0,
            nthArg: 1,
            once: 1,
            orderBy: 3,
            pad: 3,
            padEnd: 3,
            padStart: 3,
            parseInt: 2,
            partition: 2,
            property: 1,
            propertyOf: 1,
            pullAll: 2,
            pullAllBy: 3,
            pullAllWith: 3,
            random: 3,
            range: 3,
            rangeRight: 3,
            reduce: 3,
            reduceRight: 3,
            reject: 2,
            remove: 2,
            repeat: 2,
            rest: 2,
            result: 3,
            reverse: 1,
            round: 2,
            runInContext: 1,
            sample: 1,
            sampleSize: 2,
            set: 3,
            setWith: 4,
            shuffle: 1,
            size: 1,
            slice: 3,
            snakeCase: 1,
            some: 2,
            sortedIndex: 2,
            sortedIndexBy: 3,
            sortedIndexOf: 2,
            sortedLastIndex: 2,
            sortedLastIndexBy: 3,
            sortedLastIndexOf: 2,
            sortedUniq: 1,
            sortedUniqBy: 2,
            split: 3,
            spread: 2,
            startCase: 1,
            startsWith: 3,
            subtract: 2,
            sum: 1,
            sumBy: 2,
            tail: 1,
            take: 2,
            takeRight: 2,
            takeRightWhile: 2,
            takeWhile: 2,
            tap: 2,
            template: 2,
            throttle: 3,
            thru: 2,
            times: 2,
            toArray: 1,
            toInteger: 1,
            toLength: 1,
            toLower: 1,
            toNumber: 1,
            toPairs: 1,
            toPairsIn: 1,
            toPath: 1,
            toPlainObject: 1,
            toSafeInteger: 1,
            toString: 1,
            toUpper: 1,
            transform: 3,
            trim: 2,
            trimEnd: 2,
            trimStart: 2,
            truncate: 3,
            unary: 1,
            unescape: 1,
            uniq: 1,
            uniqBy: 2,
            uniqWith: 2,
            uniqueId: 1,
            unset: 2,
            unzip: 1,
            unzipWith: 2,
            update: 3,
            updateWith: 4,
            upperCase: 1,
            upperFirst: 1,
            values: 1,
            valuesIn: 1,
            words: 2,
            wrap: 2,
            zipObject: 2,
            zipObjectDeep: 2
        }
    }
}
