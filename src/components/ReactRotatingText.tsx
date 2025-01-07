"use client"
import React, {Component} from 'react';
import toArray from 'lodash.toarray';

interface Props {
    color?: string;
    cursor?: boolean;
    deletingInterval?: number;
    emptyPause?: number;
    eraseMode?: 'erase' | 'overwrite';
    items: string[];
    pause?: number;
    typingInterval?: number;
    random?: boolean;
    onTypingStart?: () => void;
    onTypingEnd?: () => void;
    onDeletingStart?: () => void;
    onDeletingEnd?: () => void;
}

interface State {
    index: number;
    output: string;
    substrLength: number;
}

class ReactRotatingText extends Component<Props, State> {
    static defaultProps = {
        color: 'inherit',
        cursor: true,
        deletingInterval: 50,
        emptyPause: 1000,
        eraseMode: 'erase',
        items: ['first', 'second', 'third', 'fourth', 'fifth'],
        pause: 1500,
        typingInterval: 50,
        random: false
    };

    private timeouts: number[] = [];

    constructor(props: Props) {
        super(props);
        const {items, random} = this.props;
        this.state = {
            index: random ? Math.floor(Math.random() * items.length) : 0,
            output: '',
            substrLength: 0,
        };
    }

    componentDidMount() {
        this._animate();
    }

    componentWillUnmount() {
        this.timeouts.forEach(clearTimeout);
    }

    private _loop = (loopingFunc: () => void, pause: number) => {
        const timeout = window.setTimeout(loopingFunc, pause);
        this.timeouts.push(timeout);

        const maxTimeouts = 100;
        if (this.timeouts.length > maxTimeouts) {
            clearTimeout(this.timeouts[0]);
            this.timeouts.shift();
        }
    };

    private _type = (text: string, callback: () => void) => {
        const {output} = this.state;
        const {typingInterval} = this.props;
        const word = toArray(text);

        this.setState({
            output: word.slice(0, toArray(output).length + 1).join('')
        });

        if (output.length < word.length) {
            this._loop(() => this._type(text, callback), typingInterval!);
        } else {
            this.props.onTypingEnd?.();
            callback();
        }
    };

    private _erase = (callback: () => void) => {
        const {output} = this.state;
        const {deletingInterval} = this.props;
        const word = toArray(output);

        this.props.onDeletingStart?.();
        this.setState({
            output: word.slice(0, word.length - 1).join('')
        });

        if (word.length !== 0) {
            this._loop(() => this._erase(callback), deletingInterval!);
        } else {
            this.props.onDeletingEnd?.();
            callback();
        }
    };

    private _overwrite = (text: string, callback: () => void) => {
        const {output, substrLength} = this.state;
        const {deletingInterval} = this.props;
        const word = toArray(text);
        const out = toArray(output);

        this.setState({
            // output: word.slice(0, substrLength).concat(out.slice(substrLength)),
            output: [...word.slice(0, substrLength), ...out.slice(substrLength)].join(''),

            substrLength: substrLength + 1,
        });

        if (word.length !== substrLength) {
            this._loop(() => this._overwrite(text, callback), deletingInterval!);
        } else {
            this.setState({
                output: text,
                substrLength: 0,
            }, callback);
        }
    };

    private _animate = () => {
        const {index} = this.state;
        const {items, pause, emptyPause, eraseMode, random} = this.props;

        const nextIndex = random
            ? Math.floor(Math.random() * items.length)
            : index === items.length - 1 ? 0 : index + 1;

        const nextWord = () => {
            this.setState({index: nextIndex});
            this._loop(this._animate, emptyPause!);
        };

        this.props.onTypingStart?.();

        this._type(items[index], () => {
            if (eraseMode === 'overwrite') {
                this._loop(() => this._overwrite(items[nextIndex], nextWord), pause!);
            } else {
                this._loop(() => this._erase(nextWord), pause!);
            }
        });
    };

    render() {
        const {
            color,
            cursor,
            items,
            deletingInterval,
            emptyPause,
            eraseMode,
            pause,
            random,
            typingInterval,
            onTypingStart,
            onTypingEnd,
            onDeletingStart,
            onDeletingEnd,
            ...other // Keep any valid DOM attributes (like className, style, etc.)
        } = this.props;

        return (
            <span
                style={{color}}
                {...other}
                aria-label={this.props.items[this.state.index]}
            >
                {this.state.output}
                {cursor && <span className="react-rotating-text-cursor">|</span>}
            </span>
        );
    }
}

export default ReactRotatingText;