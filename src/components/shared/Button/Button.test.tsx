import {render, screen } from "@testing-library/react";
import Button from "@components/shared/Button/Button";


describe('Button test', () => {
    describe('loading test', () => {
        test('로딩 상태일 경우 버튼은 disabled 가 된다', () => {
            // given
            const LOADING_STATUS = true

            // when
            render(<Button isLoading={LOADING_STATUS}/>)

            const button = screen.getByRole('button')

            // then
            expect(button).toBeDisabled()
        })
        test('로딩 상태일 경우 버튼의 내용이 "loading..." 텍스트로 보인다', () => {
            // given
            const LOADING_STATUS = true

            // when
            render(<Button isLoading={LOADING_STATUS}/>)

            const button = screen.getByRole('button')

            // then
            expect(button).toHaveTextContent('loading...')
        })
    })
})
